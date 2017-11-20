FlowRouter.route('/', {
    name: 'all',
    action() {
        BlazeLayout.render('mainLayout', {main: 'allUsers'});
    }
});

FlowRouter.route('/edit/:id', {
    name: 'edit',
    action() {
        BlazeLayout.render('mainLayout', {main: 'editUser'});
    }
});

FlowRouter.route('/add', {
    name: 'add',
    action() {
        BlazeLayout.render('mainLayout', {main: 'addUser'});
    }
});
