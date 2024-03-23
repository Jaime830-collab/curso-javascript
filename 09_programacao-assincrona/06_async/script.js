const promessa1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(15);
    }, 5000);
});

const promessa2 = Promise.resolve(10);

const promessa3 = new Promise((resolve, reject) => {
    resolve(12);
});

Promise.all([promessa1, promessa2, promessa3]).then((values) => console.log(values));
