Template.login.events({
    'submit form': function(event){
        debugger;
        event.preventDefault();
        var email = $('[email]').val();
        var password = $('[cpf]').val();
        Meteor.loginWithPassword(email, password);
        if(Meteor.userId())
            Router.go('/');
    }
})