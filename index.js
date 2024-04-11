require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT ||8080;

server.listen(PORT, () => console.log(`MarvelAPI is alive at localhost:${PORT}`));
