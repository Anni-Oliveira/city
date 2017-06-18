Template.tecnicoEdit.events({
	'click .cancelar': function (event) {
		Router.go('/tecnico');
	},
	'click .excluir': function (event) {
		var self = this;
		Meteor.call('tecnico.excluir', self._id);
		Router.go('/tecnico');
	},
	'click .salvar': function (event) {
		var self = this;
		var nome = document.getElementById('nomeTecnico').value;
		var password = document.getElementById('senhaTecnico').value;
		var cpf = document.getElementById('cpfTecnico').value;
		var telefone = document.getElementById('telefoneTecnico').value;
		var email = document.getElementById('emailTecnico').value;
		var carga = document.getElementById('cargaTecnico').value;
		var funcao = document.getElementById('funcaoTecnico').value;
		
		var tecnicno = {
			nome,
			password,
			cpf,
			telefone,
			email,
			carga,
			funcao
		}
		Meteor.call('tecnico.alterar', self._id, tecnico);
		Router.go('/homeTecnico');
  }
});