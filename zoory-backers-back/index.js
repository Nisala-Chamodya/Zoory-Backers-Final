const express = require('express')
const app = express();
const cors=require('cors')
const port = process.env.PORT || 6001;

require('dotenv').config()
console.log(process.env.DB_USER)

{/*start middleware*/}
   app.use(cors());
    app.use(express.json())
{/*end middleware*/}


{/*start mongodb config*/}

const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@zoory-backers-cluster.siy0hpb.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        {/*start database & collections*/}
        const menuCollections = client.db("zoory-backers-database").collection("menus");
        const  cartCollections=client.db("zoory-backers-database").collection("cartItems");
        {/*end database & collections*/}


        {/*start all menu items operations*/}
        app.get('/menu',async (req,res)=>{
            const result =await menuCollections.find().toArray();
            res.send(result);
        })
        {/*end all menu items operations*/}


        {/*start all cart operation*/}

        //posting cart to the db
        app.post('/carts',async (req,res)=>{
            const cartItems=req.body;
            const result=await cartCollections.insertOne(cartItems);
            res.send(result)
        })

        //get carts using email
        app.get('/carts',async (req,res)=>{
            const email =req.query.email;
            const filter={email:email};
            const result=await cartCollections.find(filter).toArray();
            res.send(result)
        })

        //get specific carts
        app.get('/carts/:id',async (req,res)=>{
            const id= req.params.id;
            const filter={_id:new ObjectId(id)};
            const  result=await cartCollections.findOne(filter);
            res.send(result);
        })

        //delete item from cart
        app.delete('/carts/:id',async (req,res) => {
            const id =req.params.id;
            const filter={_id:new ObjectId(id)};
            const result=await cartCollections.deleteOne(filter);
            res.send(result)
        })

        {/*end all cart operation*/}


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);




{/*end mongodb*/}

app.get('/', (req, res) => {
    res.send('Hello Developers!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})