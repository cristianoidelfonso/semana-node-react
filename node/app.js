import express from 'express';
import cors from 'cors';

import db from './database/db.js';

import blogRoutes from './routes/index.js';

const app = express();


app.use( cors() );
app.use( express.json() );
app.use('/blogs', blogRoutes);

try {

  await db.authenticate();

  console.log('Conexão realizada com sucesso!');

} catch (error) {

  console.log(`Error de conexão: ${error}`);
  
}

app.get('/', (request, response) => {
  response.send('Hello world!');
});


app.listen(8000, () => {
  console.log('Server Up running in: http://localhost:8000/');
});

