import * as https from 'https';

let params = {
    host: 'reqres.in',
    port: 443,
    method: 'GET',
    path: '/api/users'
}


var req = https.request(params, function (res) {
    
    var body: string[] = [];
    res.on('data', function (chunk) {
        body.push(chunk);
    });

    res.on('end', function () {
        console.log(`Received: ${body}`)
    });
    
    req.on('error', function(err) {
        console.log(err);
    });

});
req.end();




/*
async function httpRequst(){
    return ( async  function (resolve, reject) {
        let req =  https.request(params,async  function (res) {

            let body: string[] = [];
            res.on('data', async  function (chunk) {
                await body.push(chunk);
            });

            await res.on('end', async function () {
                await    resolve(`${body}`)
            });

             req.on('error', async function(err) {
               await reject(err);
            });

        });
        req.end();
    });
}

httpRequst().then(function(value) {
    console.log(value)
})
*/
console.log("Data received");

// Zadanie: Wykorzystaj składnie async await i zmodyfikuj powyższy kod