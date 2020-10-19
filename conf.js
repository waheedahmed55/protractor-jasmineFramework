/**
 * Created by Waheed on 01/09/2020.
 */

/*global protractor*/
var path = require('path');
var separator = path.sep;
var dt = new Date();
var randomFolderName = (dt.getMonth() + 1) + "" + dt.getDate() + "" + dt.getFullYear() + "_" + dt.getHours() + "h" + dt.getMinutes() + "m" + dt.getSeconds() + "s";
var HtmlReporter = require('protractor-beautiful-reporter');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

    SELENIUM_PROMISE_MANAGER: false,

    directConnect: true,

    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'https://delta-kube-qe-demo.tractionguest.xyz/#/Login',

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            useAutomationExtension: false,
            args: ['--disable-extensions', 'disable-infobars']
        }
    },

    suites: {
        smoke: ['e2e/specs/smoke-tests/TGSmokeTestSpec.js'],
        regression: ['e2e/specs/regression-tests/LoginTestsSpec.js',
        'e2e/specs/regression-tests/LocationTestsSpec.js'
        ],
    },

    specs: ['e2e/specs/regression-tests/LoginTestsSpec.js',
    //'e2e/specs/regression-tests/LocationTestsSpec.js'
    ],

    params: {
        email: "blank",
        password: "blank!"
    },

    framework: 'jasmine2',

    allScriptsTimeout: 720000,

    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 1440000
    },

    onPrepare: function () {
        browser.driver.getCapabilities().then(function (caps) {
            browser.browserName = caps.get('browserName');
        });
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: { displayStacktrace: true },
            summary: { displayDuration: false }
        }));

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './TestReports/ TractionGuestReport/',   
                preserveDirectory: false, 
                clientDefaults:{
                showTotalDurationIn: "header",                  
                totalDurationFormat: "hms"            
            }     
        }).getJasmine2Reporter());
    }
};
