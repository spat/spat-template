import flarebase from 'flarebase'


class ServiceAuth extends flarebase.auth.Auth {
  constructor() {
    super();
  }
}

var auth = new ServiceAuth();

auth.on('fail', (e) => {
  spat.modal.alert(e.message);
});


export default auth;