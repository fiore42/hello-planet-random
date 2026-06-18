const { onRequest } = require('firebase-functions/v2/https');

exports.greet = onRequest({ invoker: 'public' }, (req, res) => {
  res.json({ message: 'Hello Planet! Greetings from Firebase Functions!' });
});
