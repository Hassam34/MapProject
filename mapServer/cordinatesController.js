let Cordinates = require('./cordinatesModel');

exports.index = function (req, res) {
    Cordinates.get(function (err, cordinates) {
        if(cordinates){
            res.json({
                status: 'Sucess',
                message: 'cordinates retrieved Sucessfully',
                data: cordinates
            })
        }
        else{
            res.json({
                status: 'not found',
                message: 'data is not added yet'
            })
        }
        
    })
}

exports.new = function (req, res) {
    Cordinates.find({ $and: [{ latitude: req.body.latitude }, { longitude: req.body.longitude }] }
        , function (err, coordinates) {
            console.log(coordinates)
            if (coordinates.length > 0) {
                res.json({
                    status: 'Not added',
                    message: 'Data already included'
                })
            }
            else {
                console.log(req.body)
                Cordinates.create(req.body, function (err, cordinates) {
                    res.json({
                        status: 'New Cordinates Save',
                        data: cordinates
                    })
                })
            }

        });
}

exports.view = function (req, res) {
    Cordinates.findById(req.params.cordinates_id, function (err, cordinates) {
        if(cordinates){
            res.json({
                status: 'Cordinates details Loading ...',
                data: cordinates
            })
        }
        else{
            res.json({
                status:'no data',
                message:'Id not found'
            })
        }
        
    })
}

exports.update = function (req, res) {
    Cordinates.findById({ _id: req.params.cordinates_id }, function (err, cordinates) {
        if(cordinates){
            cordinates.update(req.body, function (err, cordinate) {
                Cordinates.findById(req.params.cordinates_id, function (err, cordinates) {
                    res.json({
                        status: 'Cordinates details Loading ...',
                        data: cordinates
                    })
                })
            })
        }
        else{
            res.json({
                status:'Not Updated',
                message:'Id not found'
            })
        }
        
    })
}

exports.delete = function (req, res) {
    Cordinates.findById({ _id: req.params.cordinates_id }, function (err, cordinates) {
        
        if (cordinates) {
            Cordinates.remove({
                _id: req.params.cordinates_id
            }, function (err, cordinates) {
                res.json({
                    status: 'sucess',
                    message: 'Cordinates Deleted'
                })
            })
        }
        else{
            res.json({
                status:'Not Deleted',
                message:'Id not found'
            })
        }
    })

}