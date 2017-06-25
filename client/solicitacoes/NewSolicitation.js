Template.NewSolicitation.events({
	'click .fa-close': function() {
		Session.set('newSolicitation', false);
	}
});