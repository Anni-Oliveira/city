Template.login.events({
    'submit form': function(event){
        debugger;
        event.preventDefault();
        var email = $('[email]').val();
        var senha = $('[senha]').val();
        Meteor.loginWithPassword(email, senha);
        if(Meteor.userId())
            Router.go('/');
    }
})