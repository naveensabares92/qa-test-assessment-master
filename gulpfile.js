/**
 * @type {gulp default file}
 */
'use strict';

const gulp = require('gulp');
var cp = require('child_process');

gulp.task('update-test-drivers', async function () {
    await cp.exec('npm run protractor-webdriver-manager-install');
    await cp.exec('npm run npm run protractor-chromedriver-manager-update');
    await cp.exec('npm run chromedriver-update');
});

module.exports = ['update-test-drivers'];
