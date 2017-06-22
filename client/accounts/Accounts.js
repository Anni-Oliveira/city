var myLogoutFunc = function() {
    Session.set('nav-toggle', '');
    FlowRouter.go('/');
}
AccountsTemplates.configure({
    confirmPassword: true,
    termsUrl: 'terms-of-use',
    privacyUrl: 'privacy',
    onLogoutHook: myLogoutFunc
});
AccountsTemplates.addFields([
    {
        _id:'firstName',
        type: 'text',
        displayName: 'Nome',
        required: true,
        re: /(?=.*[a-z])(?=.*[A-Z])/,
        errStr: 'Requerido 1 letra minuscula e 1 maiuscula'
    },
    {
        _id:'secondName',
        type: 'text',
        displayName: 'SobreNome',
        required: true,
        re: /(?=.*[a-z])(?=.*[A-Z])/,
        errStr: 'Requerido 1 letra minuscula e 1 maiuscula'
    },
    {
        _id:'cpf',
        type: 'text',
        displayName: 'CPF',
        required: true
    }
]);