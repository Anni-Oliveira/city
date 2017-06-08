Template.atletaAdd.events({
	'click .cancelar': function (event) {
		Router.go('/tecnico');
	},
	'click .salvar': function (event) {
		var nome = document.getElementById('nomeTecnico').value;
		var cpf = document.getElementById('cpfTecnico').value;
		var telefone = document.getElementById('telefoneTecnico').value;
		var email = document.getElementById('emailTecnico').value;
		var cargaHorario = document.getElementById('cargaTecnico').value;
		var funcao = document.getElementById('funcaoTecnico').value;
		
		var tecnico = {
			nome,
			cpf,
			telefone,
			email,
			cargaHorario,
			funcao,
			image: "img/user.png"
		};
		Meteor.call('tecnico.adicionar', tecnico);
		Router.go('/tecnico');
	}
});