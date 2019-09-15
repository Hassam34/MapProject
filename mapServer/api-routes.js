let router =require('express').Router();
let cordinatesController= require('./cordinatesController')

router.get('/', function(req,res){
    res.json({
        status:'Sucess',
        message:'cordinates api route connect'
    })
})

router.route('/cordinates').get(cordinatesController.index).post(cordinatesController.new)
router.route('/cordinates/:cordinates_id')
.get(cordinatesController.view)
.put(cordinatesController.update)
.delete(cordinatesController.delete)

module.exports=router;