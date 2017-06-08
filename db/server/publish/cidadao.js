Meteor.publish('cidadao', function() {
  return Cidadao.find();
});