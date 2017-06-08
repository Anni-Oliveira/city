Meteor.publish('tipoOrdem', function() {
  return TipoOrdem.find();
});