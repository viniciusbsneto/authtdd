module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'authtdd',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
