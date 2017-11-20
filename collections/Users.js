import { Meteor } from 'meteor/meteor';

Users = new Mongo.Collection("users-d8-test");

UserSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  age: {
    type: Number,
    label: "Age"
  },
  isActive: {
    type: Boolean,
    label: "Active"
  }
});

Users.attachSchema( UserSchema );

if (Meteor.isServer) {

  Meteor.publish(null, function () {
    return Users.find();
  });

}

Users.allow({
  insert() {
    return true;
  },
  remove() {
    return true;
  },
  update() {
    return true;
  },
});
