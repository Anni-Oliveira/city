Meteor.methods({
    'cidadao .adicionar': function (cidadao) {
        return Cidadao.insert({
            nome: cidadao.nome,
            cpf: cidadao.cpf,
            telefone: cidadao.telefone,
            email: cidadao.email,
            imagem: cidadao.imagem,
            password: cidadao.password,
        });
    },
    'cidadao .alterar': function (cidadaoId, cidadao) {
        return Cidadao.update({ _id: cidadaoId }, {
            $set: {
                nome: cidadao.nome,
                cpf: cidadao.cpf,
                telefone: cidadao.telefone,
                email: cidadao.email,
            }
        });
    },
    'cidadao.excluir': function (cidadaoId) {
        return Cidadao.remove({
            _id: cidadaoId
        });
    },
    'tecnico.adicionar': function (tecnico) {
        return Tecnico.insert({
            nome: tecnico.nome,
            cpf: tecnico.cpf,
            telefone: tecnico.telefone,
            email: tecnico.email,
            imagem: tecnico.imagem,
            cargo: tecnico.cargo,
            funcao: tecnico.funcao,
            password: tecnico.password,
        });
    },
    'tecnico.alterar': function (tecnicoId, tecnico) {
        return Tecnico.update({ _id: tecnicoId }, {
            $set: {
                nome: tecnico.nome,
                cpf: tecnico.cpf,
                telefone: tecnico.telefone,
                email: tecnico.email,
                cargo: tecnico.cargo,
                funcao: tecnico.funcao
            }
        });
    },
    'tecnico.excluir': function (tecnicoId) {
        return Tecnico.remove({
            _id: tecnicoId
        });
    },
   
});