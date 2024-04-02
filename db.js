import { MongoClient } from "mongodb";

const mongoConnectString = "";

export async function dbConnection() {
    
    const client = new MongoClient(mongoConnectString);

    await client.connect();
    console.log("MongoDB connected succesfully");
    return client
}
export const client = await dbConnection();

