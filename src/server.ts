import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function bootstrap() {
   try{
    await mongoose.connect(config.database_url as string);
    console.log("database is connected successfully");
    app.listen(config.port, () => {
        console.log(`aplication listening on port ${config.port}`)
      })
   }catch(err){
    console.log("database connect failed!",err);
   }
  }

  bootstrap();