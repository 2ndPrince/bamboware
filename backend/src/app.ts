// src/app.ts
import express, { Application } from 'express';

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, YSLE!!!');
});

// Export the app instance for server.ts
export default app;
