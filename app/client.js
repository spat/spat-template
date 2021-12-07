import client from '.spat/modules/client';

client.showSSR();


app.auth.init(firebase);
app.auth.on('ready', async (user) => {
  client.start();
});
