[![STAT](https://nodei.co/npm/tray.io-cucumber-js.png?download=true)](https://nodei.co/npm/tray.io-cucumber-js/)

# tray.io-cucumber-js [![Run Status](https://api.shippable.com/projects/585832b28171491100bb123f/badge?branch=master)](https://app.shippable.com/projects/585832b28171491100bb123f) [![Build Status](https://travis-ci.org/fsafaq/tray.io-cucumber-js.svg?branch=master)](https://travis-ci.org/fsafaq/tray.io-cucumber-js)

  A platform independent debuggable BDD Javascript testing framework. It's simple, easy to use and not dependant to
  any other tool or library. It's built with [nodeJs](https://nodejs.org/en/), [webdriver.io (the Selenium 2.0
  bindings for NodeJS)](http://webdriver.io/) and [cucumber-js](https://github.com/cucumber/cucumber-js "view
  cucumber js documentation") complete with integrated API Testing.


## Installation

```bash
git-clone-ssh: git@github.com:fsafaq/tray.io-cucumber-js.git
git-clone-http: https://github.com/fsafaq/tray.io-cucumber-js.git
download: https://github.com/fsafaq/tray.io-cucumber-js/archive/development.zip
npm i tray.io-cucumber-js


# To run your test locally, you'll need a local selenium server running, you can install and
# launch a selenium standalone server with chrome, firefox and phantomjs drivers via the
# following commands in a separate terminal:

npm install selenium-standalone@latest -g --save-dev
selenium-standalone install
selenium-standalone start
```

## Usage

```bash
# run 'npm install' in a terminal window from within the project folder
node ./node_modules/tray.io-cucumber-js/index.js -s ./step-definitions
or
node index.js -d -t @task
```

### Options

```bash
-h, --help                   output usage information
-v, --version                output the version number
-s, --steps <path>           path to step definitions. defaults to ./step-definitions
-p, --pageObjects <path>     path to page objects. defaults to ./page-objects
-o, --sharedObjects [paths]  path to shared objects - repeatable. defaults to ./shared-objects
-b, --browser <path>         name of browser to use. defaults to chrome
-r, --reports <path>         output path to save reports. defaults to ./reports
-d, --disableTestReport [optional]  disables the test report from opening after test completion
-t, --tags <tagName>         name of tag to run
-c, --context <path>        contextual root path for project-specific features, steps, objects etc
-f, --featuresPath <path>   path to feature definitions. defaults to ./features
-e, --email [optional]      sends email reports to stakeholders
-n, --environment [<path>]  name of environment to run the framework/test in. default to dev
-g, --reportName [optional] basename for report files e.g. use report for report.json
-x, --extraSettings [optional]  further piped configs split with pipes
-w, --remoteService [optional]  which remote driver service, if any, should be used e.g. browserstack
```

By default tests are run using Google Chrome, to run tests using another browser supply the name of that browser along with the `-b` switch. Available options are:

| Browser | Example |
| :--- | :--- |
| Chrome | `-b chrome` |
| Firefox | `-b firefox` |

### Feature files

A feature file is a [Business Readable, Domain Specific Language](http://martinfowler.com/bliki/BusinessReadableDSL.html) file that lets you describe software’s behaviour without detailing how that behaviour is implemented. Feature files are written using the [Gherkin syntax](https://github.com/cucumber/cucumber/wiki/Gherkin) and must live in a folder named **features** within the root of your project.

```gherkin
task.feature

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


```
