Router.configure({
  layoutTemplate: 'layout'
  // ,
  // notFoundTemplate: 'notFound'
  // ,
  // loadingTemplate: 'loading'
});


// Router.route('/', {name: 'home'})

Router.map(function() {
  this.route('splash', {path: '/'})
  this.route('messages');
	this.route('events');
	this.route('home');
});