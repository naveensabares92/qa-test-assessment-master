'use strict';

const GLOBAL_CONFIG = {
    TIME_OUT: process.env.CI ? 200 : 500,
};

module.exports = { GLOBAL_CONFIG };