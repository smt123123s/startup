const product = require('../model/mongoose/model/productModel');



// 搜尋器邏輯

//顯示filter頁面

exports.filtIndustry = function (req, res, next){

    product.find(function(err,data){
        if(err){res.json({
            status: 1,
            msg:e.message
        })
    }else{
        res.render('common/filterPage',{
            product: data
        })
    }
    })
};


// 搜尋器全部邏輯
exports.filtIndustry2 = function (req, res, next){

    var industry = req.body.Industry
    var name = req.body.pName
    var position = req.body.Position
    var minArea = req.body.minArea
    var maxArea = req.body.maxArea
    var minCost = req.body.minCost
    var maxCost = req.body.maxCost
    var minRevenue = req.body.minRevenue
    var maxRevenue = req.body.maxRevenue
    var minRent = req.body.minRent
    var maxRent = req.body.maxRent
    const nIndustry = new RegExp(industry, 'i')
    const nName = new RegExp(name, 'i')
    const nPosition = new RegExp(position, 'i')
   
    if(minCost == ""){
        minCost = 0;
    };
    if(maxCost == ""){
        maxCost = 99999999;
    };

    if(minRevenue == ""){
        minRevenue = 0;
    };
    if(maxRevenue == ""){
        maxRevenue = 99999999;
    };

    if(minRent == ""){
        minRent = 0;
    };
    if(maxRent == ""){
        maxRent = 99999999;
    };
   
    if(minArea == ""){
        minArea = 0;
    };
    if(maxArea == ""){
        maxArea = 99999999;
    };
    

    product.find({
        
        pArea: {$gt:minArea, $lt:maxArea},

        pCost: {$gt:minCost, $lt:maxCost},

        pRevenue: {$gt:minRevenue, $lt:maxRevenue},

        pRent: {$gt:minRent, $lt:maxRent},

        pCategory: {$regex: nIndustry},

        pName: {$regex: nName},

        pPosition: {$regex: nPosition}
    })
    .exec(function(err, data){
        if(err) {res.json({
            status:1,
            msg: err.message
        })
    }else {
        res.render('filterResult', {
            product: data
        })
    }
    })
};