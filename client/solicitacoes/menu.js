Template.Menu.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('solicitacoes');
	});
});

Template.Menu.helpers({
	solicitacoes: ()=> {
		return Solicitacoes.find({inMenu: true});
	}
});