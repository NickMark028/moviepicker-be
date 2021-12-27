module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-52-207-47-210.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd4m6s7f0uhr483'),
      user: env('DATABASE_USERNAME', 'yvsikfcealtvum'),
      password: env('DATABASE_PASSWORD', 'dd0dd1972f30355ade9459d0bee6132c7e3cbca9416588829c337a7c85bed9e6'),
      ssl: { rejectUnauthorized: false }//env.bool('DATABASE_SSL', true),
    },
  },
});
