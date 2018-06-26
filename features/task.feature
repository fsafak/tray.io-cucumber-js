@task
Feature: Create and then delete a new workflow in the Tray.io platform
  As an internet user
  I want to create and then delete a new workflow in the Tray.io platform

  Background:
    Given The user arrives on tray.io

  Scenario Outline: Create and then delete new workflow
    When they login to tray.io with <email> and <password>
    When they click create new workflow button with the name of <name>
    When they go back to dashboard
    When they delete the previously created workflow
    When they log out of tray.io

    Examples:
      |email                | password  | name  |
      |fth_sfk@hotmail.com  | Test1234  | Hello |
