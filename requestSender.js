const http = require('http');
const url= 'http://localhost:3000/api'

http.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const result = JSON.parse(data);
            console.log('Response from API:');
            console.log(result);
        } catch (error) {
            console.log('Error parsing JSON');
        }
    });

}).on('error', (err) => {
    console.log('Request error:', err.message);
});