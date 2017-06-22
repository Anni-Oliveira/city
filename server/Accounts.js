var postSignUp = function(userId, info){
    console.log(userId);
    console.log(info);
    Roles.addUsersToRoles(userId, ['normal-user'], info.profile.cpf)
}

AccountsTemplates.configure({
    postSignUpHook: postSignUp
});