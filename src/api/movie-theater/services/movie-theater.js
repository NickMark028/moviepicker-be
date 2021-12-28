'use strict';

/**
 * movie-theater service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-theater.movie-theater');
