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

const obj = new Mypromises(resolve, reject);
if (Math.random() > 0.5) {
  console.log(obj.resolves("Done"));
} else {
  console.log(obj.rejects("No"));
}

