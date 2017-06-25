Template.ListaCliente.onCreated(function (){
    this.autorun(() => {
        this.subscribe('solicitacoesCliente');
    });
});

Template.ListaCliente.helpers({
    users: function() {
        return Meteor.users.find(); 
    },
    solicitacoes: function(){
        return Solicitacoes.find();
    }
});