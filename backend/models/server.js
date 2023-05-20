const express = require('express');
const cors = require('cors');
const { connectionDB } = require('../database/mongo');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { CORS_ORIGIN } = process.env;

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.authPath = '/api/auth';
    this.adsPath = '/api/ads';
    this.athletesPath = '/api/athletes';
    this.dateEventsPath = '/api/dateEvents';
    this.directorsPath = '/api/directors';
    this.donationsPath = '/api/donations';
    this.eventsPath = '/api/events';
    this.incomesPath = '/api/incomes';
    this.matchesPath = '/api/matches';
    this.postsPath = '/api/posts';
    this.productsPath = '/api/products';
    this.subscriptionsPath = '/api/subscriptions';
    this.testimonialsPath = '/api/testimonials';
    this.usersPath = '/api/users';
    // Connect to Data Base
    this.connectToDB();
    // Middlewares
    this.middlewares();
    // Routes of App
    this.routes();
  }

  async connectToDB() {
    await connectionDB();
  }

  middlewares() {
    this.app.use(cookieParser());
    // CORS
    this.app.use(
      cors({
        allowedHeaders: [
          'Origin',
          'X-Requested-With',
          'Content-Type',
          'Accept',
        ],
        credentials: true,
        origin: [
          'https://club-agronomia-central-henna.vercel.app',
          'http://localhost:3000',
          'https://club-agronomia-central.vercel.app',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
      })
    );
    // Lectura y parseo del body
    this.app.use(express.json({ limit: '1024mb' }));

    // It parses incoming requests with URL-encoded payloads
    this.app.use(express.urlencoded({ limit: '1024mb', extended: true }));

    //Public dir
    this.app.use(express.static('public'));
  }
  routes() {
    this.app.use(this.authPath, require('../routes/auth'));
    this.app.use(this.adsPath, require('../routes/ads'));
    this.app.use(this.athletesPath, require('../routes/athletes'));
    this.app.use(this.dateEventsPath, require('../routes/dateEvents'));
    this.app.use(this.directorsPath, require('../routes/directors'));
    this.app.use(this.donationsPath, require('../routes/donations'));
    this.app.use(this.eventsPath, require('../routes/events'));
    this.app.use(this.incomesPath, require('../routes/incomes'));
    this.app.use(this.matchesPath, require('../routes/matches'));
    this.app.use(this.postsPath, require('../routes/posts'));
    this.app.use(this.productsPath, require('../routes/products'));
    this.app.use(this.subscriptionsPath, require('../routes/subscriptions'));
    this.app.use(this.testimonialsPath, require('../routes/testimonials'));
    this.app.use(this.usersPath, require('../routes/users'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server running on port: ${this.port}`);
    });
  }
}

module.exports = Server;
