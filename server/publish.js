Meteor.publish('allUsers', function (){
    if(Roles.userIsInRole(this.userId, 'admin')){
    return Meteor.users.find({});
    }
});

Meteor.publish('allPosts', function(){
  return Posts.find();
});