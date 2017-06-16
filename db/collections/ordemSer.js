OrdemSer = new Meteor.Collection('ordemSer');
var ordensArray = [
    {
        _id: "jogoFutebolDeSalaoId",
        modalidadeId: "futebolDeSalaoId",
        data: new Date(2016, 11, 25, 18, 30),
        local: "Ferreira Pacheco",
        responsavel: "Carlos Antônio",
        equipeId: 'equipeFutebolDeSalaoId'
    }
]

if (OrdemSer.find().count() === 0) {
	ordensArray.forEach(function (ordemSer) {
		OrdemSer.insert(
			ordemSer
		);
	});
} 
