Meteor.publish('allUsers', function (){
    if(Roles.userIsInRole(this.userId, 'admin')){
    return Meteor.users.find({});
    }
});

Meteor.publish('allPosts', function (){
    if(Roles.userIsInRole(this.userId, 'admin')){
    return Meteor.posts.find({});
    }
});