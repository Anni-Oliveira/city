Meteor.publish('allUsers', function (){
    if(Roles.userIsInRole(this.userId, 'admin')){
    return Meteor.users.find({});
    }
});

Meteor.publish('solicitacoes', function(){
	return Solicitacoes.find({author: this.userId});
});

Meteor.publish('SingleSolicitacao', function(id){
	check(id, String);
	return Solicitacoes.find({_id: id});
});