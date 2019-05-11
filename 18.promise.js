//Promise对象用于表示一个异步操作的最终状态（完成或失败），以及该异步操作的结果值。
var promise1=new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve('foo');
    },300)
});

promise1.then(function (value) {
    console.log(value);
});

console.log(promise1);