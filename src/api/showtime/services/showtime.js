'use strict';

/**
 * showtime service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::showtime.showtime');
