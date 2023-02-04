const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://dbuser1:rjLsZLxJMOqsG8mK@cluster0.9mv6kq4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db('nodeMongoCrud').collection('users');
        const user = {
            name: 'testing',
            email: 'testing@gmail.com'
        }
        const result = await userCollection.insertOne(user);
        console.log(result);
    }
    finally {

    }
}

run().catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('hello from node mongodb crud server');
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})