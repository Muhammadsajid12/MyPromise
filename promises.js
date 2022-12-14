
function MyPromise(exc) {
  let value = null;
  let state = "Pending";
  function resolve(res) {
    state = "Fulfiled";
//     let's suppose resolve take tow sec to take value..
    setTimeout(() => {
      value = res;
      console.log(value);
    }, 2000);
  }
  function reject(rej) {
    state = "Rejected";
    setTimeout(() => {
      value = rej;
    }, 2000);
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

// Create a Promise object
const promises = new MyPromise(excutorfn);

setTimeout(() => {
  promises.then((value) => {
    console.log(value);
  });
  
  promises.catch((value) => {
    console.log(value);
  });
}, 3000);


