
var utils = {
  wait(time) {
    return new Promise((resovle) => {
      setTimeout(resovle, time);
    });
  },
};

export default utils;

