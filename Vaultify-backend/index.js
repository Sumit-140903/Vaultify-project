import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB.js';
import authRoutes from './routes/auth.routes.js';
import documentRoutes from './routes/document.routes.js';
import accessRequestRoutes from './routes/accessRequest.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true 
}));



app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/requests', accessRequestRoutes);

// Start server after attempting DB connection
(async () => {
  const dbOk = await connectDB();
  app.locals.dbConnected = !!dbOk;

  app.get('/api/health', (req, res) => {
    res.json({ ok: true, dbConnected: !!app.locals.dbConnected });
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    if (!app.locals.dbConnected) {
      console.warn('Server started without a successful DB connection. Some features may be limited. Fix MONGODB_URI to enable full functionality.');
    }
  });
})();
