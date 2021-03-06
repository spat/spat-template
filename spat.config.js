var extendDeep = require('extend-deep');

var config = {
  server: {
    // cache: true,
    // ssr: false,
  },
  client: {
    // spa: false,

    head: {
      title: 'spat template',
      description: 'frontend framework',
      favicon: '/favicon.ico',
      ogp: {
        site_name: 'spat',
        type: 'website',
        image: 'https://chat-rabee-jp.appspot.com/static/images/ogp.png'
      }
    },
    firebase: {
      apiKey: "AIzaSyCiJjzLD4C5ueJ2wP3UVmdTa7BfiqnWu5Q",
      authDomain: "chat-rabee-jp.firebaseapp.com",
      databaseURL: "https://chat-rabee-jp.firebaseio.com",
      projectId: "chat-rabee-jp",
      storageBucket: "chat-rabee-jp.appspot.com",
      messagingSenderId: "50741122756"
    },
  },
  plugins: [
    { global: '$', src: 'jquery' },
    { global: 'firebase', src: '~/plugins/firebase.js' },
    { global: 'app', src: '~/scripts/app.js' },
    { src: '~/styles/main.less' },
  ],
  test: {
    pages: [
      '/',
    ],
  }
};

module.exports = config;