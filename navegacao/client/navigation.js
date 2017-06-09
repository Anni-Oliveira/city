Template.navigation.rendered = function () {

	// Initialize metisMenu
	$('#side-menu').metisMenu();

};

// Used only on OffCanvas layout
Template.navigation.events({
	'click .itemMenu': function () {
		Router.go(this.rota);
	},
	'click .close-canvas-menu': function () {
		$('body').toggleClass("mini-navbar");
	}

});

Template.navigation.helpers({
	menuNavigation() {
		return _menu;
	}
})

_menu = [
	{
		template: 'home',
		rota: '/',
		nome: 'Home',
		icone: 'fa fa-home',
	},
	{
		template: 'adicionarOrdem',
		rota: '/cidadao',
		nome: 'Cidadao',
		icone: 'fa fa-users'
	},
	{
		template: 'listarOrdens',
		rota: '/tecnicoWork',
		nome: 'Tecnico',
		icone: 'fa fa-user'
	},
	{
		template: 'listarOrdens',
		rota: '/ordem',
		nome: 'Ordem de Serviço',
		icone: 'fa fa-work'
	},
	
]