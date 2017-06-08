TipoOrdem = new Meteor.Collection('tipoO');

tipoOArrary = [
	{
		_id: 'luzId',
		nome: 'Luz'
	},
	{
		_id: 'buracoRuaId',
		nome: 'Buraco na rua'
	},
	{
		_id: 'bueiroId',
		nome: 'Bueiro entupido'
	},
	{
		_id: 'lixoId',
		nome: 'Lixo não recolhido'
	},
	{
		_id: 'loteId',
		nome: 'Lote vazio sem limpeza'
	},
	
];

if (TipoOrdem.find().count() === 0) {
	tipoOArrary.forEach(function (cidadao) {
		TipoOrdem.insert(
			cidadao
		);
	});
}