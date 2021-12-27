module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '25338c93aa2d7db825f5161407dab511'),
  },
});
