var hooksObject = {

  // Called when any submit operation succeeds
  onSuccess: () => {
    FlowRouter.go("/");
  }

};

AutoForm.addHooks(null, hooksObject);
