const baseNightwatchConfig = {
    "src_folders": [
        "tests"
    ],
    "output_folder": "reports/XMLReports",
    "custom_commands_path": "",
    "custom_assertions_path": "",
    "page_objects_path": "pages",
    "webdriver": {
        "start_process": true
    },
    selenium: {
        start_process: false,
        server_path: "lib/drivers/selenium-server-standalone-3.141.59.jar",
        host: '127.0.0.1',
        port: 4444,
      },
}
module.exports = baseNightwatchConfig;