Template.postSubmit.onCreated(function() {
  Session.set('postSubmitErrors', {});
});

Template.postSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('postSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.postSubmit.events({
  'click .submit form': function(e) {
    e.preventDefault();
    
    var posts = {
      descricao: $(e.target).find('[name=descricao]').val(),
      rua: $(e.target).find('[name=rua]').val(),
      bairro: $(e.target).find('[name=bairro]').val(),
      cep: $(e.target).find('[name=cep]').val()
    };
    
    var errors = validatePost(posts);
    if (errors.descricao || errors.rua)
      return Session.set('postSubmitErrors', errors);
    
    Meteor.call('postInsert', posts, function(error, result) {
      if (error)
        return throwError(error.reason);

      if (result.postExists)
        throwError('This link has already been posted');
      
      Router.go('postList', {_id: result._id});  
    });
  }
});