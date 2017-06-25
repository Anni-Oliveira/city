// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", {main: "Dashboard"});
    }
});

FlowRouter.route('/services', {
	name: 'services',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('AppLayout', {main: 'Services'});
	}
});


FlowRouter.route('/listaS', {
	name: 'listaS',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('AppLayout', {main: 'ListaS'});
	}
});

FlowRouter.route('/minhaLista', {
	name: 'minhaLista',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('AppLayout', {main: 'ListaCliente'});
	}
});


var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'admin'
});

adminRoutes.route('/users', {
    name: 'users',
    action() {
        BlazeLayout.render("AppLayout", {main: "Users"});
    }
})