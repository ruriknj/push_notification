var push = require('web-push');

let vapidKeys = {
  publicKey:
    'BHebmqRIcMFi18L5VUNUXVxT3E5gcbxSsL7LPMPhAMnZslSlMilnJX7rAE-0ufoLY2lF6QQ1SERXPckKIw3gbng',
  privateKey: 'PbR4vVQEWx3PskWh8RvMatOKpkXQplNgH3lcuundIck'
};

push.setVapidDetails(
  'mailto:test@code.co.uk',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {};

push.sendNotification(sub, 'test message');
