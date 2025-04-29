
import express from 'express';
import obras from './obras.js';

const router = express.Router();


router.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Visita a: ${req.originalUrl}`);
  next();
});

// Página de inicio
router.get('/', (req, res) => {
  res.render('index', { titulo: 'MuseArte' });
});

// Galería de obras
router.get('/galeria', (req, res) => {
  res.render('galeria', { titulo: 'Galería de Obras', obras });
});

// Detalle de obra
router.get('/obra/:id', (req, res) => {
  const obra = obras.find(o => o.id == req.params.id);
  if (!obra) return res.status(404).send('Obra no encontrada');
  res.render('obra', { titulo: obra.titulo, obra });
});

// Acerca de
router.get('/acerca', (req, res) => {
  res.render('acerca', { titulo: 'Acerca de MuseArte' });
});

// Redirección de /inicio
router.get('/inicio', (req, res) => {
  res.redirect('/');
});

export default router;







