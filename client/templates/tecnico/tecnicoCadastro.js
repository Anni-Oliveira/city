Template.atletaAdd.events({
	'click .cancelar': function (event) {
		Router.go('/tecnico');
	},
	'click .salvar': function (event) {
		var nome = document.getElementById('nomeTecnico').value;
		var password = document.getElementById('senhaTecnico').value;
		var cpf = document.getElementById('cpfTecnico').value;
		var telefone = document.getElementById('telefoneTecnico').value;
		var email = document.getElementById('emailTecnico').value;
		var carga = document.getElementById('cargaTecnico').value;
		var funcao = document.getElementById('funcaoTecnico').value;
		
		var tecnico = {
			nome,
			cpf,
			telefone,
			email,
			carga,
			funcao,
			imagem: "img/user.png",
			password
		};
		Meteor.call('tecnico.adicionar', tecnico);
		Router.go('/tecnico');
	}
});