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

// then catch
cekHariKerja('senin').then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
/*
then catch pada program ini bekerja dengan cara mengecek apakah promise yang ada pada 
function cekHariKerja mengembalikan resolve / reject, jika mengembalikan resolve maka
code yang dijalankan adalah then (menampilkan hasil) sedangkan jika promise mengembalikan 
reject maka code yang dijalankan adalah catch (menampilkan error)
*/ 