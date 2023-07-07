const mongoose = require('mongoose');

// const connectdb = async ()=>{
//     try{
//         await mongoose.connect('')
//         console.log('Connected to db');
//     }
//     catch(err){
//         console.log(err);
//     }
// }


class connectdb{
    constructor(){
        this.__connect();
    }
    __connect=()=>{
        mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log('Connected to db');
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

module.exports = new connectdb();