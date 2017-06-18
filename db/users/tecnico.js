Tecnico = new Meteor.Collection('tecnico');

var tecnicoArray = [
	 {
		_id: 'tecnicoJerlianniId',
		nome: 'Jerlianni Oliveira',
		cpf: '098-657-345-21',
		email: 'jerlianni@gmail.com',
		telefone: '(62) 9-9634-5485',
		carga: '40 horas semanais',
		funcao: 'triagem e suporte',
		imagem: 'img/a1.jpg',
		password: '111111'
	}
	
];

if (Tecnico.find().count() === 0) {
	tecnicoArray.forEach(function (tecnico) {
		Tecnico.insert(
			tecnico
		);
	});
}