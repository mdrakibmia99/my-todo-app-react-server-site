const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;
const app=express();
 
// middleware
app.use(cors());
app.use(express.json());
 
app.get('/',(req,res)=>{
    res.send('running todo apps')
})
 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qe05g.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri)

async function run(){
    try{
        await client.connect();
        const myTaskCollection =client.db('MyToDoApps').collection('myTask');
    

 
    }catch{
 
    }
 
}
run().catch(console.dir);
app.listen(port,()=>{
    console.log('server is running',port)
})
