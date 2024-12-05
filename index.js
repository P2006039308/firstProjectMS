const express = require('express');
const app = express();

// port:3001

const port = 3001;

app.use(express.json());

// root path or root route

app.get('/', (req, res) => {

     res.send("Hello team");
}
);

app.post('/user', (req, res) => {
    const userId = req.body.userId;
    console.log('user received: ${userid}');
})

app. listen(port, () =>{
    console.log("My server is running" + port);
});

console.log("Hello");