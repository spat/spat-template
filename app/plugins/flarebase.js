import flarebase from 'flarebase';

flarebase.init(spat.config.firebase);
flarebase.auth.init();

export default flarebase;