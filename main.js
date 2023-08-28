// function a() {
//     console.log('a')
// }

// function b(fn){
//     for(let i = 0; i < 10000000; i++) {}
//     console.log('b')
//     fn('output from b')
// }

// function c() {
//     console.log('c')
// }

// const d = inp1 => console.log('d output', inp1)

// b(d)

// // a()
// // b()
// // c()

// setTimeout(() => {
//     console.log('execute callback')
// }, 1000)

// const { readFile } = require('fs');
// // readFile('user.json', {encoding: 'utf-8'}, function(err, data) {
// //     console.log(err)
// //     console.log(data)
// // })

// readFile('user.json', 'utf-8', function(err, data){
//     console.log(typeof data)
//     const parsedData = JSON.parse(data)
//     // console.log(parsedData.firstName)
//     readFile('product.json', 'utf-8', function(err1, data1) {
//         const parsedData1 = JSON.parse(data1);
//         // console.log(parsedData1.name)
//         console.log(`${parsedData.firstName} : ${parsedData1.name}`)
//     })
// })


const b = (age) => {
    // for(let i = 0; i < 10_000_000; i++) {}
    // console.log('b')
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            for(let i = 0; i < 100_000_000; i++) {}
            console.log('b')
            if(age >= 18) {
                resolve('success')
            } else {
                reject('less than 18')
            }
        }, 0)
    })
    return promise;
}


const p = b(20);
// // p.then(response => {
// //     console.log(response)
// // })

const p1 = b(15)
// // p1.catch(err => {
// //     console.log(err)
// // })

p1.then(response => {
    console.log(response)
}) .catch(err => {
    console.log(err)
}) .finally(() => {
    console.log('finally block')
})