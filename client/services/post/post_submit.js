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
    
    var post = {
      descricao: $(e.target).find('[name=descricao]').val(),
      rua: $(e.target).find('[name=rua]').val(),
      bairro: $(e.target).find('[name=bairro]').val(),
      cep: $(e.target).find('[name=cep]').val()
    };
    
    var errors = validatePost(post);
    if (errors.title || errors.url)
      return Session.set('postSubmitErrors', errors);
    
    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      
      // show this result but route anyway
      if (result.postExists)
        throwError('This link has already been posted');
      
      Router.go('postPage', {_id: result._id});  
    });
  }
});