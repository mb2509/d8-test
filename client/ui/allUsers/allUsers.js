import { Template } from 'meteor/templating';

import './allUsers.html';

Template.allUsers.helpers({

  users() {
    return Users.find({});
  }

});
