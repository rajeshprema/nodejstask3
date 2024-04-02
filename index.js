                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ij n
import express from "express";
import { client, dbConnection } from "./db.js";

const PORT = 9000;

const app = express();
//dbConnection();


app.get("/mendar/all", async(req, res) => {
    try {
        const mendar = await client
            .db("dome")
            .collection("mendar")
            .find()
            .toArray();
        if (mendar.length === 0) {
            return res.status(400).json({ message:"No data available" })
            
        }
        res.status(200).json({data:mendar})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
        
    }    
         
        


})

app.listen(PORT,()=>console.log(`server starter in localhost:${PORT}`))