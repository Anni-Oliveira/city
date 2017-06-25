Solicitacoes = new Mongo.Collection('solicitacoes');

Solicitacoes.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

//var SimpleSchema = require ( " node-simple-schema " );

SolicitacaoSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
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