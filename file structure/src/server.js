const express = require('express');

const port = 5050;
const app = express();

app.get('/', (__, res) => {
    res.send('hello world....!!!!')
});

app.listen(5050, (err) => {
    if (err) {
        console.log('server is not started!!');

    }
    console.log(`server is started on port ${port}`);

})