const mongoose=require ("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");

const listingSchema=new Schema({
    title: {
        type:String,
        requred:true,
    },
    description:String,
    image :
     { 
       url:String,
       filename:String,
    },
    price: Number,
    location:String,
    country:String,
    latitude: Number,
    longitude: Number,
    reviews:[
        {
        type: Schema.Types.ObjectId,
        ref:"Review",
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    category:{
        type: String,
        enum: ["mountains", "arctic", "farms", "pools", 
               "lakes", "beach", "luxury", "camping", "towers", "rooms"]
    }
}); 

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing;