import { app } from "./app.js"
import { connectDB } from "./data/database.js";

//Connecting Database
connectDB();

app.listen(process.env.PORT, () => {
    console.log("Server Started");
});