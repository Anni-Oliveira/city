Template.ListaS.onCreated(function (){
    this.autorun(() => {
        this.subscribe('solicitacoes');
        this.subscribe('allUsers');
    });
});

Template.ListaS.helpers({
    users: function() {
        return Meteor.users.find(); 
    },
    solicitacoes: function(){
        return Solicitacoes.find();
    },
    dateFormat: function() {
        return moment(this.creatAt).format('MMMM D YYYY hh');
    }
});