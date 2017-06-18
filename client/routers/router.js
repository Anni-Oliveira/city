Router.configure({
	layoutTemplate: 'mainLayout',
});

Router.route('/login', function () {
	this.layout("blankLayout");
	this.render('login');
});

/*Router.route('/', function () {
  this.render('home');
});*/

Router.route('/', {
	before: function() {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('home');
  }
});

Router.route('/cidadao', {
	before: function() {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('home');
  }
});

Router.route('/add', {
	before: function() {
		this.render('cidadaoCadastro');
	},
});

Router.route('/cidadao/:_cidadaoId', {
	before: function () {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('cidadaoEd');
	},
	data: function () {
		var cidadaoId = this.params._cidadaoId;
		return Cidadao.find({ _id: cidadaoId }).fetch()[0];
	}
});

Router.route('/tecnico-home', {
	before: function() {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('homeTecnico');
  }
});

Router.route('/addNewTecnico', {
	before: function() {
		this.render('tecnicoCadastro');
	},
});

Router.route('/tecnico/:_tecnicoId', {
	before: function () {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('tecnicoEd');
	},
	data: function () {
		var tecnicoId = this.params._tecnicoId;
		return Tecnico.find({ _id: tecnicoId }).fetch()[0];
	}
});
