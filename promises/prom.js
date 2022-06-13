function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

function resolveAfter3Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f2() {
  // If you don't await this function, x will be a pending Promise
  const x = await resolveAfter2Seconds("mac and cheese")
  console.log(x)
  console.log("soup")
}

async function f1() {
  resolveAfter3Seconds("pizza")
    .then(res => console.log(res));
  console.log("potato")
}

f2()
f1()
