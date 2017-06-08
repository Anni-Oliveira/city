Jogo = new Meteor.Collection('jogo');
var jogosArray = [
    {
        _id: "jogoFutebolDeSalaoId",
        modalidadeId: "futebolDeSalaoId",
        data: new Date(2016, 11, 25, 18, 30),
        local: "Ferreira Pacheco",
        responsavel: "Carlos Antônio",
        equipeId: 'equipeFutebolDeSalaoId'
    }
]

if (Jogo.find().count() === 0) {
	jogosArray.forEach(function (jogo) {
		Jogo.insert(
			jogo
		);
	});
} 
