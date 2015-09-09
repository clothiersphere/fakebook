Template.post.helpers({
	likeCount : function () {
		return Likes.find(this._id).count();
	},
	postComments : function () {
		return Posts.find({parent:this._id});
	}
})