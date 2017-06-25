Template.Solicitacoes.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('solicitacoes');
	});
});

Template.Solicitacoes.helpers({
	solicitacoes: ()=> {
		return Solicitacoes.find({});
	}
});

Template.Solicitacoes.events({
	'click .new-solicitation': () => {
		Session.set('newSolicitation', true);
	}
});