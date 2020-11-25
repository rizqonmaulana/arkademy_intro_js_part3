// cek obat
const cekObat = (nama) => {
    return new Promise((resolve, reject) => {
        let daftarObat = ['paracetamol', 'antimo', 'kalpanax', 'betadine']
        let cek = daftarObat.find((item) => {
            return item === nama
        })
        if(cek) {
            resolve(cek +  ' tersedia')
        } else {
            reject(new Error(nama + ' tidak tersedia'))
        }
    })
}

async function cariObat(nama) {
    try {
        let result = await cekObat(nama)
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}

cariObat('betadine')