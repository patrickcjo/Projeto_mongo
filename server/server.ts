import app from './app';

const port = 8080;
const host = 'localhost';

app.listen(port, host, () => {
  console.log(`Servidor express iniciado em: http://${host}:${port}`);
});