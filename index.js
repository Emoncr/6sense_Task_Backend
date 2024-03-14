import "dotenv/config";
import connectDB from "./src/db/index.js";
import { app } from "./src/app.js";



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err); 
})


// P58PnnV4R86oTyR2     biplobemon75945


// mongodb+srv://biplobemon75945:P58PnnV4R86oTyR2@cluster1.quykjvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1