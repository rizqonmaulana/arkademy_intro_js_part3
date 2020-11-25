const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// try catch
async function hariKerja(day) {
    try{
        await cekHariKerja(day)
        console.log(day)
    } catch(error) {
        console.log(error)
    }
}
/*
try catch pada program ini berfungsi untuk mengecek apakah promise pada function cekHariKerja 
mengembalikan nilai resolve / reject, jika resolve maka tidak akan menampilkan error, namun jika
reject maka program akan menampilkan error
*/

hariKerja('selasa')