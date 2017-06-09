Template.cidadaoCadastro.events({
	'click .cancelar': function (event) {
		Router.go('/cidadao');
	},
	'click .salvar': function (event) {
		var nome = document.getElementById('nomeCidadao').value;
		var cpf = document.getElementById('cpfCidadao').value;
		var telefone = document.getElementById('telefoneCidadao').value;
		var email = document.getElementById('emailCidadao').value;
		var senha = document.getElementById('senhaCidadao').value;

		var cidadao = {
			nome,
			cpf,
			telefone,
			email,
			image: "img/user.png",
			senha
		};
		Meteor.call('cidadao.adicionar', cidadao);
		Router.go('/cidadao');
	}
});