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
		if(Meteor.userId()){
			FlowRouter.go('service');
		}
		GAnalytics.pageview();
		BlazeLayout.render('AppLayout', {main: 'Services'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		BlazeLayout.render('AppLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/solicitacao/:id', {
	name: 'solicitation',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('AppLayout', {main: 'SolicitationSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Menu'});
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