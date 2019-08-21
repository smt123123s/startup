const product = require('../model/mongoose/model/productModel');

exports.pagination = function(req, res, next){
    
   product.find()

   .exec(function(err, data){

        var pagination = req.params.page -1;
        var eachPage = 3;
        var totalPage = Math.ceil(data.length/eachPage);
        var bPrevious = pagination;
        var bNext = pagination + 2;

        if (bNext > totalPage){
            bNext = totalPage;
        }

        if (bPrevious <= 0){
            bPrevious = 1;
        }

        product.find()
        .skip(pagination*3)
        .limit(eachPage)
        .exec(function(err, rData){
            if(err) {res.json({
                status:1,
                msg:err.message
            })
        } else {
           
            res.render('page', {
                product: rData,
                total: totalPage,
                previous: bPrevious,
                next: bNext,
                index: pagination
            })
        }
        })
   })
}