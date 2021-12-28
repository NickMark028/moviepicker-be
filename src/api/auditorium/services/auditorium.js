'use strict';

/**
 * auditorium service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auditorium.auditorium');
