'use strict';
let taskData = require('../shared-objects/taskData');

let shared = ({taskData});

module.exports = {

  /** enters a search term into ebay's search box and presses enter
   * @param {string} email
   * @param {string} password
   * @returns {Promise} a promise to enter credentials
   */

  performLogin: async function (email, password) {
    await helpers.waitAndClick(shared.taskData.elem.loginLinkOnHomepage);

    await helpers.waitAndSetValue(shared.taskData.elem.emailInput, email);
    await helpers.waitAndSetValue(shared.taskData.elem.passwordInput, password);
    await helpers.waitAndClick(shared.taskData.elem.loginBtn);
    log.info('Login button is clicked');
  },

  createNewWorkflow: async function (name) {
    await helpers.waitAndClick(shared.taskData.elem.createNewWorkflowBtn);
    await helpers.waitAndSetValue(shared.taskData.elem.workflowInputField, name);
    await driver.click(shared.taskData.elem.workflowInputField).keys("\uE007");
  },

  clickCreateButton: async function () {
    await helpers.waitAndClick(shared.taskData.elem.createButton);
  },

  clickCloseButton: async function () {
    await helpers.waitAndClick(shared.taskData.elem.closeButton);
  },

  deleteWorkflow: async function () {
    // await helpers.waitAndClick(shared.taskData.elem.workflowMenuBtn);
    // log.info('workflowMenuBtn is clicked');
    // await helpers.clickHiddenElement(shared.taskData.elem.deleteOption, );
    // log.info('Delete button is clicked');
    // await helpers.waitAndClick(shared.taskData.elem.yesBtn);
    // log.info('Yes button is clicked');
  },

  logOut: async function () {
  await helpers.waitAndClick(shared.taskData.elem.avatarField);
  await helpers.waitAndClick(shared.taskData.elem.logoutBtn);
  log.info('User is logged out');
  },

  };
