//  keliling persegi 
const persegi = (sisi) => {
    return new Promise((resolve, reject) => {
        if (typeof sisi === 'number' && sisi > 0) {
            resolve(sisi * 4)
        } else {
            reject(new Error('input harus berupa number dan lebih dari 0'))
        }
    })
}

async function kelilingPersegi(sisi) {
    try {
        let result = await persegi(sisi)
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}

kelilingPersegi(5)
