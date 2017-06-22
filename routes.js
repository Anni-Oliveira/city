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
        BlazeLayout.render("AppLayout", {main: "Services"});
    }
});

FlowRouter.route('/list-services', {
    name: 'list-services',
    action() {
        BlazeLayout.render("AppLayout", {main: "ListServices"});
    }
});

FlowRouter.route('/notifications', {
    name: 'notifications',
    action() {
        BlazeLayout.render("AppLayout", {main: "Notifications"});
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