let http = require('http');
let fs = require('fs');
let url = require('url');

let hostname = '127.0.0.1';
let port = 3000;

fs.readFile('index.html', (err, html) => {

    if(err){
        throw err;
    }

    let server = http.createServer((req, res) => {


        let page = url.parse(req.url).pathname;
        console.log(page);
        res.StatusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        if (page == '/') {
            res.write(html);
        }else if(page == '/index.html'){
            res.write(html);
        }
        else {
            let render = "Return <a href='index.html'>Home</a> <h1>ERROR 4004</h1>"
            res.write(render);
        }

        // res.write(html);
        res.end();
    });

    server.listen(port, hostname, () => {
        console.log("Server started on port "+port);
    });
});
