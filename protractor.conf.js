// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

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
        format: ['json:test-reports/cucumber-test-results.json', 'summary'],
    },
    onPrepare() {
        browser.manage().window().maximize();
        require('ts-node').register({
            project: require('path').join(__dirname, './test/tsconfig.e2e.json'),
        });
    },
};
