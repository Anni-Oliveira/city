Template.SolicitationSingle.onCreated(function(){
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('SingleSolicitacao', id);
	});
});

Template.SolicitationSingle.helpers({
	solicitacao: ()=> {
		var id = FlowRouter.getParam('id');
		return Solicitacoes.findOne({_id: id});
	}
});