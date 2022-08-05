import querystring from 'querystring';
import https from 'https';

const host = 'http://localhost:5910';
const username = 'JonBob';
const password = '*****';
const apiKey = '*****';
const sessionId = null;
const deckId = '68DC5A20-EE4F-11E2-A00C-0858C0D5C2ED';

export const performRequest = (endpoint:any, method:any, data:any, success:any) => {
    var dataString = JSON.stringify(data);
    var headers = {};

    if (method == 'GET') {
        endpoint += '?' + querystring.stringify(data);
    } else {
        headers = {
            'Content-Type': 'application/json',
            'Content-Length': dataString.length
        };
    }
    let options = {
        host: host,
        path: endpoint,
        method: method,
        headers: headers
    };

    var req = https.request(options, function(res) {
        res.setEncoding('utf-8');

        var responseString = '';

        res.on('data', function(data) {
            responseString += data;
        });

        res.on('end', function() {
            console.log(responseString);
            var responseObject = JSON.parse(responseString);
            success(responseObject);
        });
    });

    req.write(dataString);
    req.end();
}