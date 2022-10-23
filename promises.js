// Main promise class

class Mypromises {
  constructor(resol, rej) {
    this.resolves = resol;
    this.rejects = rej;
  }

  resolves() {
    return this.resolve;
  }
  rejects() {
    return this.reject;
  }
}

const resolve = (res) => {
  return res;
};
const reject = (rej) => {
  return rej;
};

// Here  testing Promises.......
const obj = new Mypromises(resolve, reject);

if (Math.random() > 0.5) {
  setTimeout(() => {
    console.log(obj.resolves("Promise is resolved"));
  }, 3000);
} else {
  setTimeout(() => {
    console.log(obj.rejects("Promise is rejected"));
  }, 3000);
}
