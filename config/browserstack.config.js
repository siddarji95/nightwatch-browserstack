const _ = require('lodash');
const baseConfig = require('./base.config.js');
const nightwatchBrowserstackConfig = _.cloneDeep(baseConfig);

const browserstackTestSettings = {
    selenium : {
      "start_process" : true,
      "host" : "hub-cloud.browserstack.com",
      "port" : 80
    },
  
    test_settings: {
      default: {
        desiredCapabilities: {
          'build': 'nightwatch-browserstack',
          'browserstack.user': process.env.BROWSERSTACK_USERNAME,
          'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
          'browserstack.debug': true,
          'browserstack.local': true,
          'browserName': 'chrome',
          'os': 'OS X',
          'os_version': 'Sierra',
        }
      }
    }
  };
  
  _.merge(nightwatchBrowserstackConfig, browserstackTestSettings);
  
  module.exports = nightwatchBrowserstackConfig; 