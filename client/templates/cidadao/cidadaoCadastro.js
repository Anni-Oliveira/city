Template.cidadaoCadastro.events({
	'click .cancelar': function (event) {
		Router.go('/add');
	},
	'click .salvar': function (event) {
		var _cidadaoId = document.getElementsByName('cidadao'+nome+'id').value;
		var nome = document.getElementById('nomeCidadao').value;
		var sobrenome = document.getElementById('sobreNomeCidadao').value;
		var cpf = document.getElementById('cpfCidadao').value;
		var telefone = document.getElementById('telefoneCidadao').value;
		var email = document.getElementById('emailCidadao').value;
		var password = document.getElementById('senhaCidadao').value;

		var cidadao = {
			_cidadaoId,
			nome,
			sobrenome,
			cpf,
			telefone,
			email,
			password,
			image: "img/user.png"
		};
		Meteor.call('cidadao.adicionar', cidadao);
		Router.go('/cidadao');
	}
});