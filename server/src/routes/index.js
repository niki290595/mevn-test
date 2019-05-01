module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({ message: 'API works!!!' });
  });

  app.use('/auth', require('./auth/index'));
  app.use('/api/posts', require('./api/posts'));

  app.use((req, res, next) => {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    next(error);
  });

  app.use((err, req, res, next) => {
    res.status(res.statusCode || 500);
    res.json({
      message: err.message,
      stack: err.stack
    });
  });
};

