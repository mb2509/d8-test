import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // if the Users collection is empty
  if (Users.find().count() === 0) {
    const data = [
      {
        name: 'User 1',
        age: 20,
        isActive: true
      },
      {
        name: 'User 2',
        age: 25,
        isActive: true
      },
      {
        name: 'User 3',
        age: 30,
        isActive: true
      },
      {
        name: 'User 4',
        age: 27,
        isActive: false
      },
      {
        name: 'User 5',
        age: 21,
        isActive: false
      },
    ];

    data.forEach(user => Users.insert(user));
  }
});
