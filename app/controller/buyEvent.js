const buyEvent = require('../model/mongoose/model/buyEvenetModel');

exports.show_buyEvent = function(req, res, next){
    res.render('buyEvent');
}


exports.buyEvent = function(req, res, next){
    
    var data = new buyEvent();
    data.bName = req.body.bName;
    data.bPhone = req.body.bPhone;
    data.bEmail = req.body.bEmail;
    data.bOccupation = req.body.bOccupation;
    data.bBudget = req.body.bBudget;
    data.bPrice = req.body.bPrice;

    //簡單版save，沒有增加查詢重複邏輯，後期可加入
    data.save(function(err, upload){
        if(err) {       
            req.flash('error', '上傳失敗哦~ 可能是格式出錯了');
            res.redirect('back');
            return next(err);
        }else{
            req.flash('success', '上傳成功啦~');
            res.redirect('back');
            console.log('data upload~');
        }
    });

    
}