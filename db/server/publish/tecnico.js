Meteor.publish('tecnico', function() {
  return Tecnico.find();
});