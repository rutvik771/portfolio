module.exports = {
  // "development": {
  //   "username": process.env.USERNAME,
  //   "password": process.env.PASSWORD,
  //   "database": process.env.DATABASE,
  //   "host": process.env.HOST,
  //   "dialect": "mysql"
  // },
  "development": {
    "username": "root",
    "password": "snrjdpsr1999",
    "database": "portfolio",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
