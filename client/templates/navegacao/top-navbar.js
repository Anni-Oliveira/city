Template.topNavbar.events({
	'click .sair': function () {
        debugger;
		event.preventDefault();
        Meteor.logout();
        Router.go('/login')
	}
});