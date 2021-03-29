const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://swapi.dev/api/people/1/'

function fetchAPI(url, callback){
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function(event){
        if(req.readyState === 4){
            if(req.status === 200){
                callback(null, JSON.parse(req.responseText))
            } else {
                const error = new Error(`URL invalidate ${url}`)
                return callback(err, null)
            }
        }
    }

    req.send()
}


fetchAPI(`${API}/startships`, function(error1, data1){
    if(error1) return console.error(error1)
    fetchAPI(`${API}/starships/${data1[1].name}`, function(error2, data2){
        if(error2) return console.error(error2)
        fetchAPI(`${API}/planets/${data2.originPlanet}`, function(error3, data3){
            if(error3) return console.error(error3)
            console.log(data2.name)
            console.log(data3.name)
        })
    })
})