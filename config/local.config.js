const _ = require('lodash');
const baseConfig = require('./base.config.js');
const nightwatchLocalConfig = _.cloneDeep(baseConfig);

const localTestSettings = {
    "test_settings": {
        "default": {
            "webdriver": {
                "port": 9515,
                "server_path": "lib/drivers/chromedriver",
                "cli_args": [
                    "--verbose"
                ]
            },
            "desiredCapabilities": {
                "browserName": "chrome",
            }
        }
    }
}
_.merge(nightwatchLocalConfig, localTestSettings);
module.exports = nightwatchLocalConfig;