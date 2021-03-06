import * as https from 'https';

let params = {
    host: 'reqres.in',
    port: 443,
    method: 'GET',
    path: '/api/users'
}

function httpRequst(): Promise<string> {
    return new Promise(function (resolve, reject) {
        var req = https.request(params, function (res) {

            var body: string[] = [];
            res.on('data', function (chunk) {
                body.push(chunk);
            });

            res.on('end', function () {
                resolve(`${body}`)
            });

            req.on('error', function(err) {
               reject(err);
            });

        });
        req.end();
    });
}

httpRequst().then(function(value) {
    console.log(value)
})

console.log("Data received");

// Zadanie: Wykorzystaj składnie async await i zmodyfikuj powyższy kod