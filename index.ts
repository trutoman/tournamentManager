import express, { Request, Response } from 'express';

const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.get('/login', (req, res) => {
  res.send(`
    <h1>Iniciar sesión</h1>
    <form method="post" action="/login">
      <label>
        Usuario:
        <input type="text" name="username">
      </label>
      <br>
      <label>
        Contraseña:
        <input type="password" name="password">
      </label>
      <br>
      <button type="submit">Iniciar sesión</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Verificar las credenciales y redirigir al usuario a la página principal si son correctas
  if (username === 'usuario' && password === 'contraseña') {
    res.redirect('/');
  } else {
    res.send(`
      <h1>Iniciar sesión</h1>
      <p>Usuario o contraseña incorrectos. Inténtalo de nuevo.</p>
      <form method="post" action="/login">
        <label>
          Usuario:
          <input type="text" name="username">
        </label>
        <br>
        <label>
          Contraseña:
          <input type="password" name="password">
        </label>
        <br>
        <button type="submit">Iniciar sesión</button>
      </form>
    `);
  }
});

app.listen(3000, () => {
  console.log('Aplicación escuchando en el puerto 3000!');
});