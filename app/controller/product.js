const product = require('../model/mongoose/model/productModel');

// 展示全部product的功能
exports.show_product = function(req, res, next){

    product.find(function(err, data){
        if(err)  {res.json ({
            status: 1,
            msg: err.message
        })
    }else{
        res.render('product' ,{
            product: data
        })
    }
    })
};


// 展示個別product 根據productId選取

exports.indi_product = function(req, res, next){
    
    var productId = req.params.productId;

    product.find ({
        pId: productId
    })
    .exec(function(err, data){
        var category = data[0].pCategory[0];

        product.find({
            pCategory:  category,
            pId:{$ne: productId}
        })
        .exec(function(err, cate){
            if(err){res.json({
                status:1,
                msg: err.message
            })
        }else{
            res.render('indiProduct',{
                product: data,
                relateProduct: cate
            })
        }
        })
    })
};

// 分類邏輯 根據pCategory選擇get產品
exports.pCategoryList = function(req, res, next){

    var productCategory = req.params.category;
    product.find({
        pCategory: productCategory
    })
    .exec(function(err, data){
        if(err) {res.json ({
            status: 1,
            msg: err.message
        })
    }else{
        res.render('CategoryPage', {
            product: data
        })
    }
    })
};

// 分類邏輯 根據pTag選擇get產品

exports.pTagList = function(req,res,next){
    
    var tagCategory = req.params.tag;
    product.find({
        pTag: tagCategory
    })
    .exec(function(err, data){
        if(err) {res.json ({
            status: 1,
            msg: err.message
        })
    }else {
        res.render('tagCategory', {
            product: data,
            pTitle: tagCategory
        })
    }
    })
};

// 分割

exports.experiment2 = function(req, res,next){

   product.find()
   
   .exec(function(err, data){

        var eachPage = 3;
        var totalPage = Math.ceil(data.length/eachPage);

       product.find()

       .limit(eachPage)
       .exec(function(err, rData){
        
        if(err) {res.json({
            status: 1,
            msg: err.message
        })
    } else {
        res.render('experiment', {
            total:totalPage,
            
        })
    }
       })
       

   })
} 