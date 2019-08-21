const upload = require('../model/mongoose/model/uploadModel');
const _ = require('underscore');


//賣生意文件上傳
//上傳頁邏輯，在view中渲染註冊頁面
exports.show_sellEvent = function(req,res,next){
    res.render('sellEvent');
}


//上傳頁邏輯，把頁面post到的東西截取上傳到DB
exports.sellEvent = function(req, res, next){
    
    var data = new upload();
    data.uName = req.body.uName;
    data.uPhone = req.body.uPhone;
    data.uEmail = req.body.uEmail;
    data.uOccupation = req.body.uOccupation;
    data.uRevenue = req.body.uRevenue;
    data.uPrice = req.body.uPrice;

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



