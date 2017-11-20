import { Template } from 'meteor/templating';

import './editUser.html';

Template.editUser.helpers({

  user: () => {
    var id = FlowRouter.getParam('id');
    return Users.findOne({_id: id});
  }

});

Template.editUser.events({

  'click .delete-user': () => {
    event.preventDefault();
    var id = FlowRouter.getParam('id');
    Users.remove({_id: id});
    FlowRouter.go("/");
  }

});
