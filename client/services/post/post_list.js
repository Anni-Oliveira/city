Template.postList.onCreated(function (){
    this.autorun(() => {
        this.subscribe('allPosts');
    });
});

Template.postList.helpers({
    post: function() {
        return Post.find(); 
    },
    editMode: function() {
        return Session.get('currentPost') ? 'edit-mode' : '';
    },
    currentEdit: function(){
        let post = Session.get('currentPost');
        return post._id === this._id;
    }
});

Template.postList.events({
    'click .post_id': function() {
        Session.set('currentPost', this);
    },
    'click .close-edit-mode': function() {
        Session.set('currentPost', null);
    }
});