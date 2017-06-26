Solicitacoes = new Mongo.Collection('solicitacoes');

Solicitacoes.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	},
	// remove: function(userId, doc) {
	// 	return !!userId;
	// }
});

//var SimpleSchema = require ( " node-simple-schema " );

SolicitacaoSchema = new SimpleSchema({
	tipo_problema: {
	type: String,
	
	label: "Marque qual o tipo de problema encontrado:",
	autoform: {
		class:"input-control radio",
	type: "select-radio-inline",
	allowedValues: [true],
	options: function () {
		return [
		{
			label: "Buraco",
			value: 1
		},
		{
			label: "Poste sem luz",
			value: 2
		},
		{
			label: "Bueiro entupido",
			value: 3
		},
		{
			label: "Lote sem limpar",
			value: 4
		},
		{
			label: "Lixo acumulado",
			value: 5
		}
		];
	  }
	 }
	},

	descricao: {
		type: String,
		label: "Descricao"
	},

	ruaAvenida: {
		type: String,
		label: "Rua/Avenida"
	},

	bairro: {
		type: String,
		label: "Bairro/Setor"
	},

	cep: {
		type: String,
		label: "CEP"
	},

	author: {
		type: String,
		label: "Author",
		autoValue: function () {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},

	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState){
		Solicitacoes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	deleteSolicitacao: function(id){
		Solicitacoes.remove(id);
	}
});

Solicitacoes.attachSchema(SolicitacaoSchema);