var push = require('web-push');

let vapidKeys = {
  publicKey:
    'BNaP6FcA_Y_hhW3k9Xm3zy6QBytgRj5wvXq_bNI9KHVahNXuLa8janxwvu-dR5gTZpYMmkknL6EmCuC2z-qSDGk',
  privateKey: 'Hb5FgrePuJSzG4qdLGRc5p0F2fb8uO2E-EeGpK1hOFY'
};

push.setVapidDetails(
  'mailto:test@code.co.uk',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
   endpoint:
    'https://fcm.googleapis.com/fcm/send/dgC9OhIDDpE:APA91bFn48B5MW77N47xf7JvSWLLfWb35d90f0XpoiS9uQx78uRhsSqbGwPO1gh4zRueNN7KpCI5L3PTbTtY6pG9glI2t7qtI7nyB8trzEURMx2V4_PeiLmcORWS81rzkswiBHfS0nv',
  expirationTime: null,
  keys: {
    p256dh:
      'BOuF_qFvqQ-NQvJKMkuLfS0WtRh7J4-ZEcqtEm1JKKFV7BsBabhzmGyA0Oj_11m2oK4W8rQqXpNqacZFH4yZpsI',
    auth: 'vyAXFWlw-7gqiocPWvbJIA'
  }
};

push.sendNotification(sub, 'test message');
