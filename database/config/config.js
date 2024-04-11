/*{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
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
*/
require('dotenv').config()

module.exports = {
  "development": {
    "url": process.env.DEV_DATABASE_URL,
    "dialect": 'postgres',
    "migrationsPath": "database/migrations" // Ruta de la carpeta de migraciones para desarrollo
  },
  "test": {
    "url": process.env.TEST_DATABASE_URL,
    "dialect": 'postgres',
    "migrationsPath": "database/migrations" // Ruta de la carpeta de migraciones para pruebas
  },
  "production": {
    "url": process.env.DATABASE_URL,
    "dialect": 'postgres',
    "migrationsPath": "database/migrations" // Ruta de la carpeta de migraciones para producción
  },
};

