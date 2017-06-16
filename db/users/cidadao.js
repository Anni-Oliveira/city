Cidadao = new Meteor.Collection('cidadao');

var cidadaoArray = Meteor.users.insert([

	{
		_id: 'cidadaoGleivertonId',
		image: 'img/a1.jpg',
		nome: 'Gleiverton Ramalho',
		email: 'gleiverton@gmail.com',
		cpf: '343.456.234.10',
		telefone: '(62) 9-9786-4556',
		password: '000000'
	}, {
		_id: 'cidadaoJhonataId',
		image: 'img/a2.jpg',
		nome: 'Jhônata Leandro',
		email: 'jhonataL@gmail.com',
		cpf: '234.231.567-25',
		telefone: '(62) 9-9762-9231',
		password: '000000'
	}, {
		_id: 'cidadaoAlexAlvesId',
		image: 'img/a3.jpg',
		nome: 'Alex Alves Maia',
		email: 'alexAM@gmail.com',
		cpf: '231.768.900-23',
		telefone: '(62) 9-8764-2334',
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
