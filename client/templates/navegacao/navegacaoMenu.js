Template.navegacaoMenu.rendered = function () {

	// Initialize metisMenu
	$('#side-menu').metisMenu();

};

// Used only on OffCanvas layout
Template.navegacaoMenu.events({
	'click .itemMenu': function () {
		Router.go(this.rota);
	},
	'click .close-canvas-menu': function () {
		$('body').toggleClass("mini-navbar");
	}

});

Template.navegacaoMenu.helpers({
	menuNavegacao() {
		return _menu;
	}
})

_menu = [
	{
		template: 'home',
		rota: '/',
		nome: 'home',
		icone: 'fa fa-home',
	},
	{
		template: 'adicionarOrdem',
		rota: '/cidadao',
		nome: 'cidadao',
		icone: 'fa fa-users'
	},
	{
		template: 'listarOrdens',
		rota: '/tecnicoWork',
		nome: 'tecnico',
		icone: 'fa fa-user'
	},
	{
		template: 'listarOrdens',
		rota: '/ordem',
		nome: 'Ordem de Serviço',
		icone: 'fa fa-work'
	},
	
]