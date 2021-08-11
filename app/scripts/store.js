var flarebase = require('flarebase');

class StoreManager extends flarebase.store.StoreManager {
  constructor() {
    super();
  }
}

var store = new StoreManager();


/*
 * users class
 */
store.registerDocumentStoreClass('users', class extends flarebase.store.DocumentStore {
  constructor(item) {
    super(item);
  }

  // 自己紹介
  introduce() {
    alert(`私の名前は ${this.data.display_name || this.data.screen_name} です!`);
  }
});

export default store;