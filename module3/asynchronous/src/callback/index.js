function ImCallBack(data){
    console.log('im callback')
    console.log(data)
}

function haciendoUnaPeticionHTTP(callback){
    console.log('......')

    callback({
        id: 1,
        username: 'abc',
        age: 25
    })
}

haciendoUnaPeticionHTTP(ImCallBack)