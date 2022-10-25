
function MyPromise(exc) {
  let value = null;
  let state = "Pending";
  function resolve(res) {
    state = "Fulfiled";
    value = res;
    console.log(value);
  }
  function reject(rej) {
    state = "Rejected";
    value = rej;
  }

  this.then = function (Scallback) {
    if (state === "Fulfiled") {
      Scallback(value);
    }
  };

  this.catch = function (Fcallback) {
    if (state === "Rejected") {
      Fcallback(value);
    }
  };

  exc(resolve, reject);
}
const excutorfn = (res, rej) => {
  if (Math.random() > 0.5) {
    setTimeout(() => {
      res("Promise is Resolved:");
    }, 2000);
  } else {
    setTimeout(() => {
      rej("Promise is Reject");
    }, 2000);
  }
};

// Create a Person object
const promises = new MyPromise(excutorfn);
// Display age
setTimeout(() => {
  promises.then((value) => {
    console.log(value);
  });
}, 3000);

setTimeout(() => {
  promises.catch((value) => {
    console.log(value);
  });
}, 3000);
