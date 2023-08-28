// const alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// const log = (arr, ms) => {
//     arr.forEach(x => {
//         setTimeout(() => {console.log(x)}, ms)
//         ms += 1000
//     })
// }

// log(alphabetArr, 1000)

// # TA's code
// function log2(ms, cb) {
//     setTimeout(function() {
//         cb()
//     }, ms)
// }

// log2(1000, function() {
//     console.log('a');
//     log2(1000, function() {
//         console.log('b');
//     })
// })

const {readFile} = require('fs')

readFile('user.json', 'utf-8', function(err, data) {
    console.log(data)
})

const readFilePromise = (path, encoding) => {
    const promise = new Promise((resolve, reject) => {
        readFile(path, encoding, function(err, data) {
            if(err) {
                return reject(err)
            }
            resolve(data);
        }) 
    })
    return promise;
}

// readFilePromise('user.json', 'utf-8').then(response => {
//     console.log(response)
// }) .catch(err => {
//     console.log(err)
// })

// readFilePromise('product.json', 'utf-8').then(response => {
//     console.log(response)
// }) .catch(err => console.log(err))

// const p1 = readFilePromise('user.json', 'utf-8')
// const p2 = readFilePromise('product.json', 'utf-8')

// const result = Promise.all([p1,p2]);
// result.then(response => {
//     const resUser = JSON.parse(response[0]);
//     const resProduct = JSON.parse(response[1]);
//     console.log(resUser.firstName + ':' + resProduct.name)
// }).catch(err => console.log(err))

async function run() {
    const p1 = await readFilePromise('user.json', 'utf-8')
    const p2 = await readFilePromise('product.json', 'utf-8')
    const parseUser = JSON.parse(p1)
    const parseProduct = JSON.parse(p2)
    console.log(parseUser.firstName + ':' + parseProduct.name)
}

run()
// const run = async function() {}
// const run = async () => {}

    