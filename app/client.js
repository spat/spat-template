import client from '.spat/modules/client';

client.showSSR();

flarebase.auth.checkAuth().then((user) => {
  client.start();
});

