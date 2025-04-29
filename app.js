
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Configuración de Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware de logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Monta el router
app.use('/', router);

// Arranca el servidor
app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`);
});



