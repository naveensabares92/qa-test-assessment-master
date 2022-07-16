'use strict';

const GLOBAL_CONFIG = {
    TIME_OUT: process.env.CI ? 500 : 2000,
};

module.exports = { GLOBAL_CONFIG };