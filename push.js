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
    'https://fcm.googleapis.com/fcm/send/fwMG_ImcKYc:APA91bHtTnPUQ0tBehI7Kk1CGn4s3yhIKhJunhqiggl5XxbyVPmqxDkugwctQMzL2VDTrG_ypKwWqb1Djv-kqWbxpmsatPSjSAUldFENqCIZShaFvZFiCwH-X2hS0-Xjqv5mq2XYHcf9',
  expirationTime: null,
  keys: {
    p256dh:
      'BLHrTAa9dZ4LV5DoCgtXCXLMd21_S3qyt4eSqn6UQCjIEAuemY0QI29Mvc-LL02e0DLGPKd3xkVHjCD4eqJWHSg',
    auth: 'TW-LBZmYtXNW7VQUPX4I0w'
  }
};

push.sendNotification(sub, 'test message');
