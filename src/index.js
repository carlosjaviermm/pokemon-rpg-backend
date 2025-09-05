// Entry point of the backend API
require('dotenv').config(); // Load .env variables
const express = require('express'); // Web framework
const cors = require('cors'); // Allow cross-origin requests
const db = require('./db'); // Our database connection (we'll build db.js next)
const usersRouter = require('./routes/users');
const pokemonRouter = require('./routes/pokemon');
const shopRouter = require('./routes/shop');


// Create Express app
const app = express();
app.use(cors());
app.use(express.json());

// Health check route (verify DB connection)
app.get('/api/health', async (_req, res) => {
  try {
    await db.raw('select 1'); // Simple query to check DB is alive
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.use('/api/users', usersRouter);
app.use('/api/pokemon', pokemonRouter)
app.use('/api/shop', shopRouter)

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
