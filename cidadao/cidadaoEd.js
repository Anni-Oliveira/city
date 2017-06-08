Template.cidadaoEdit.events({
	'click .cancelar': function (event) {
		Router.go('/cidadao');
	},
	'click .excluir': function (event) {
		var self = this;
		Meteor.call('cidadao.excluir', self._id);
		Router.go('/cidadao');
	},
	'click .salvar': function (event) {
		var self = this;
		var nome = document.getElementById('nomeCidadao').value;
		var matricula = document.getElementById('cpfCidadao').value;
		var telefone = document.getElementById('telefoneCidadao').value;
		var email = document.getElementById('emailCidadao').value;
		
		var cidadao = {
			nome,
			matricula,
			telefone,
			email,
		}
		Meteor.call('cidadao.alterar', self._id, cidadao);
		Router.go('/cidadao');
  }
});