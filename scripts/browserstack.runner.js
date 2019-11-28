#!/usr/bin/env node
require('dotenv').config()
const Nightwatch = require('nightwatch');
const browserstack = require('browserstack-local');

try {

  process.mainModule.filename = "./node_modules/nightwatch/bin/nightwatch"
  // Code to start browserstack local before start of test
  console.log("Connecting local...");
  const bsLocal = Nightwatch.bs_local = new browserstack.Local(); // eslint-disable-line

  const browserStackTunnelOptions = {
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    force: true,
    verbose: true,
    localIdentifier: `test-${Date.now()}`,
  };
  bsLocal.start(browserStackTunnelOptions, (error) => {
    if (error) throw error;
    console.log('Connected. Now testing...');

    Nightwatch.cli((argv) => {
      Nightwatch.CliRunner(argv)
        .setup(null, () => {
          // Code to stop browserstack local after end of parallel test
          console.log('Setup: Shutting down browserstack tunnel...');
          bsLocal.stop(() => {});
        })
        .runTests(() => {
          // Code to stop browserstack local after end of single test
          console.log('runTests: Shutting down browserstack tunnel...');
          bsLocal.stop(() => {});
        });
    });
  });
} catch (ex) {
  console.log('There was an error while starting the test runner:\n\n');
  process.stderr.write(ex.stack + '\n');
  process.exit(2);
}