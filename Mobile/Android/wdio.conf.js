export const config = {
  
    runner: 'local',
   port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'ebac-qe',
        'appium:platformVersion': '9.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        'appium:appWaitActivity': '.MainActivity',
        'appium:disableIdLocatorAutocompletion': true
    }],

    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
   
    framework: 'mocha',
    reporter: 'mochawesome',
    reporterOptions: {
      reportFilename: "[name]-result",
    html: false
     },
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
   

}