Template.postEdit.onCreated(function() {
  Session.set('postEditErrors', {});
});

Template.postEdit.helpers({
  errorMessage: function(field) {
    return Session.get('postEditErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('postEditErrors')[field] ? 'has-error' : '';
  }
});

Template.postEdit.events({
  'click .submit form': function(e) {
    e.preventDefault();
    
    var currentPostId = this._id;
    
    var postProperties = {
      descricao: $(e.target).find('[name=descricao]').val(),
      rua: $(e.target).find('[name=rua]').val(),
      bairro: $(e.target).find('[name=bairro]').val(),
      cep: $(e.target).find('[name=cep]').val()
    }
    
    var errors = validatePost(postProperties);
    if (errors.descricao || errors.rua || errors.bairro || errors.cep)
      return Session.set('postEditErrors', errors);
    
    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        Router.go('postList', {_id: currentPostId});
      }
    });
  },
  
  'click .delete': function(e) {
    e.preventDefault();
    
    if (confirm("Encerrar esta solicitação?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('/');
    }
  }
});