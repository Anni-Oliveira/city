Tecnico = new Meteor.Collection('tecnico');

var tecnicoArray = [
	{
		_id: 'tecnicoJerlianniId',
		image: 'img/a1.jpg',
		nome: 'Jerlianni Oliveira',
		email: 'jerlianni@gmail.com',
		cpf: '098-657-345-21',
		telefone: '(62) 9-9634-5485',
		carga: '40 horas semanais',
		funcao: 'triagem e suporte'

	},
	
];

if (Tecnico.find().count() === 0) {
	tecnicoArray.forEach(function (tecnico) {
		Tecnico.insert(
			tecnico
		);
	});
}