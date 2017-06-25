Template.Solicitacao.onCreated(function(){
	this.editMode = new ReactiveVar(false);
	//	this.editMode = new ReactiveVar();
	// this.editMode.set(false);
});

Template.Solicitacao.helpers({
	updateSolicitacaoId: function() {
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
});

Template.Solicitacao.events({
	'click .fa-trash': function () {
		Meteor.call('deleteSolicitacao', this._id);
	},
	'click .fa-pencil': function (event, template) {
		template.editMode.set(!template.editMode.get());
	}
});