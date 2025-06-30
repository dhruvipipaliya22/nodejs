// http=Hypertext Transfer Protocol;
// https=Hypertext Transfer Protocol Secure;
const http = require('http');
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');

dotenv.config(
    { path: './.env' }
)
const serves = http.createServer((req, res) => {
    let url = req.url
    if (url === '/') {
        res.write('welcome to Home page !!!');
        res.end();
    }
    else if (url === '/about') {
        res.write('welcome to About page !!!');
        res.end();
    }
    else if (url === '/contact') {
        res.write('welcome to Contact page !!!');
        res.end();
    }
    else if (url === '/faq') {
        res.write('welcome to FAQ page !!!');
        res.end();
    }
    else {
        res.writeHead(404);
        res.write('404 page not found !!!');
        res.end();
    }
});

serves.listen(port, (err) => {
    if (err) {
        console.log('server is not successsfully started !!');
    }
    console.log('server is successfully started !!');
});