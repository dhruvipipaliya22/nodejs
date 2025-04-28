const mongoose=require("mongoose")
const dbconnect=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("conecte to mongoose");
        
    }catch(error){
        console.log("error",error);
    }
}

module.exports=dbconnect