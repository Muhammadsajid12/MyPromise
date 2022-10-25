// Object constructor fn
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
    res("Promise is Resolved:");
  } else {
    rej("Promise is Reject");
  }
};

// Create a Peromise object
const promises = new MyPromise(excutorfn);

promises.then((value) => {
  console.log(value);
});

promises.catch((value) => {
  console.log(value);
});
