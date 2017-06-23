Posts = new Mongo.Collection('posts');

Posts.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});

Posts.deny({
  update: function(userId, post, fieldNames, modifier) {
    var errors = validatePost(modifier.$set);
    return errors.descricao || errors.rua || errors.bairro || errors.cep;
  }
});

validatePost = function (post) {
  var errors = {};

  if (!post.descricao)
    errors.descricao = "Por favor coloque uma descrição";
  
  if (!post.rua)
    errors.rua =  "Por favor coloque uma Rua/Avenida";

  if (!post.bairro)
    errors.bairro = "Por favor coloque um Bairro";
  
  if (!post.cep)
    errors.cep =  "Por favor coloque um CEP";

  return errors;
}

Meteor.methods({
  postInsert: function(postAttributes) {
    check(this.userId, String);
    check(postAttributes, {
      descricao: String,
      rua: String,
      bairro: String,
      cep: String
    });
    
    var errors = validatePost(postAttributes);
    if (errors.descricao || errors.rua || errors.bairro || errors.cep)
      throw new Meteor.Error('invalid-post', "É necessário inserir TODAS as informações para prosseguimento da solicitação");
    
    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id, 
      author: user.firstName, 
      submitted: new Date(),
      commentsCount: 0,
    });
    
    var postId = Posts.insert(post);
    
    return {
      _id: postId
    }
  },
});