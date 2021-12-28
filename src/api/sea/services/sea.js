'use strict';

/**
 * sea service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sea.sea');
