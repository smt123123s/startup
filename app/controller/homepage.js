const product = require('../model/mongoose/model/productModel');

// 展示全部product的功能
exports.homepage = function(req, res, next){
    product.find(function(err, data){
        if(err)  {res.json ({
            status: 1,
            msg: err.message
        })
    }else{
        res.render('homepage' ,{
            product: data
        })
    }
    })
};

