const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json()); /** Faz com que o json seja entendido no código(converte) */
app.use(routes);
app.listen(3333);