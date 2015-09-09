Meteor.publish("posts", function (){
	return Posts.find();
})

Meteor.publish("likes", function (postId){
	return Likes.find({post:postId});
})