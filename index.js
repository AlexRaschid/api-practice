const express = require('express'); //() is a function call
const app = express();
const PORT = 8080;

app.use(express.json()); //middleware, parses incoming requests with JSON payloads, available in req.body





app.listen(
    PORT,
    () => console.log(`Server is running on http://localhost:${PORT}`)
);

app.get('/HelloWorld', (req, res) => {
    res.status(200).send({
        defaultMessage: 'Hello World!',
        defaultMessage2: 'First API get request?'
    });
}); //req is request, res is response


app.post('/HelloWorld/:id', (req, res) => { 

    const { id } = req.params; //get from url, val made available to in request parameters object
    const { message } = req.body; //get from body, val made available to in request body object

    if (!message){
        res.status(418).send({ message: 'need a message!'}); //418 is a teapot
    }


    res.send({
        message: `your message: ${message} | and ID of: ${id}`
    });
});

