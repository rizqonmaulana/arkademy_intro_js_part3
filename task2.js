const getmonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['january', 'february', 'march', 'april',
                    'may', 'june', 'july', 'august', 'september',
                    'october', 'november', 'december']
        if(!error){
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

let showMonth = (condition, month) => {
    if (condition === null){
        month.map((item) => {
            console.log(item)
        })
    } else {
        console.log(condition, month)
    }
}

getmonth(showMonth)

