var mongoose=require('mongoose')

var cordinatesSchema= mongoose.Schema({
    locname:{
        type:String,
        required: true
    },
    latitude:{
        type:Number,
        required: true
    },
    longitude:{
        type:Number,
        required: true
    },
    
})

var Cordinates= module.exports= mongoose.model('cordinates', cordinatesSchema);
module.exports.get=function(callback,limit){
    Cordinates.find(callback).limit(limit)
}