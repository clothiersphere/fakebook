Meteor.publish("posts", function (){
	return Posts.find();
})

Meteor.publish("likes", function (postId){
	return Likes.find({post:postId});
})

Meteor.methods({
	//{text: '', owner: '', date:'', parent: ''}
	'addPost': function (options){
		var post = {
			text: options.text,
			owner: Meteor.userId(),
			date: new Date(),
			parent: options.parent
		}
		
		console.log(post)
		Posts.insert(post);
	}, 
	'removePost': function (postId){
		Posts.remove({_id:id});
	},
	'removeAllPosts': function(){
		Posts.remove({});
	}
})