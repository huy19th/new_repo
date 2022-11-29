const http = require('http');
const url = require('url');
const qs = require('qs');

const server = http.createServer((req, res) => {
    let path = url.parse(req.url,true);
    // let query = qs.parse(path.query);
    let query = path.query;
    console.log(query);
});

const PORT = 2000;
server.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
