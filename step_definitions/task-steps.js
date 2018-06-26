
let {Given, Then, When} = require('cucumber');
let task = require('../page-objects/task');
let taskData = require('../shared-objects/taskData');

let shared = ({taskData});
let page = ({task});


  Given(/^The user arrives on tray.io$/, function() {
    return helpers.loadPage(shared.taskData.url, 10);
  });

  When(/^they login to tray.io with (.*) and (.*)$/, function(email, password) {
    /** use a method on the page object which also returns a promise */
    return page.task.performLogin(email, password);
  });

  When(/^they click create new workflow button with the name of (.*)$/, function(name) {
    return page.task.createNewWorkflow(name);
  });

  When(/^they go back to dashboard$/, function() {
    return page.task.clickCloseButton();
  });

  When(/^they delete the previously created workflow$/, function() {
    return page.task.deleteWorkflow();
  });

  When(/^they log out of tray.io$/, function() {
    return page.task.logOut();
  });
