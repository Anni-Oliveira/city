Cidadao = new Meteor.Collection('cidadao');

var cidadaoArray = Meteor.users.insert([

	{
		_id: 'cidadaoGleivertonId',
		nome: 'Gleiverton Ramalho',
		cpf: '343.456.234.10',
		telefone: '(62) 9-9786-4556',
		email: 'gleiverton@gmail.com',
		imagem: 'img/a1.jpg',
		password: '000000'
	}, {
		_id: 'cidadaoJhonataId',
		nome: 'Jhônata Leandro',
		cpf: '234.231.567-25',
		telefone: '(62) 9-9762-9231',
		email: 'jhonataL@gmail.com',
		imagem: 'img/a2.jpg',
		password: '000000'
	}, {
		_id: 'cidadaoAlexAlvesId',
		nome: 'Alex Alves Maia',
		cpf: '231.768.900-23',
		telefone: '(62) 9-8764-2334',
		email: 'alexAM@gmail.com',
		imagem: 'img/a3.jpg',
		password: '000000'
	}
	
]);

if (Cidadao.find().count() === 0) {
	cidadaoArray.forEach(function (cidadao) {
		Cidadao.insert(
			cidadao
		);
	});
}
