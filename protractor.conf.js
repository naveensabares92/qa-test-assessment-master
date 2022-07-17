// Protractor configuration file, see link for more information
exports.config = {
    debug: false,
    allScriptsTimeout: 11000,
    specs: ['./test/features/*.feature'],
    capabilities: {
        browserName: 'chrome',
        chromeOnly: true,
        chromeOptions: {
            args: ['--no-sandbox'],
        },
    },

    directConnect: true,
    allScriptsTimeout: 45000,
    baseUrl: 'http://localhost:4200/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['test/steps/*steps.ts'],
        format: ['json:test/test-reports/json/cucumber-test-results.json', 'summary'],
    },
    onPrepare() {
        browser.manage().window().maximize();
        require('ts-node').register({
            project: require('path').join(__dirname, './test/tsconfig.e2e.json'),
        });
    },
    plugins: [
        {
            package: require.resolve('protractor-simple-cucumber-html-reporter-plugin'),
            options: {
                reportPath: 'test/test-reports/html/',
                openReportInBrowser: true,
                removeExistingJsonReportFile: true,
            },
        },
    ],
};
