const sellEventController = require('../app/controller/sellEvent');
const homepageController = require('../app/controller/homepage');
const productPage = require('../app/controller/product');
const filterPage = require('../app/controller/filter');
const guidePage = require('../app/controller/guide');
const aboutUsPage = require('../app/controller/aboutUs');
const paginationPage = require('../app/controller/pagination');
const buyEventPage = require('../app/controller/buyEvent');
const contactUsPage = require('../app/controller/contactUs');



module.exports = function(app){
    app.get('/', homepageController.homepage);
    app.get('/sellEvent', sellEventController.show_sellEvent);
    app.post('/sellEvent/upload',sellEventController.sellEvent)
    app.get('/product', productPage.show_product);
    app.get('/product/:productId', productPage.indi_product);
    app.get('/Category/:category', productPage.pCategoryList);
    app.get('/filter', filterPage.filtIndustry);
    app.post('/filter/result', filterPage.filtIndustry2);
    app.get('/guide', guidePage.guide);
    app.get('/aboutUs', aboutUsPage.aboutUs);
    app.get('/page/:page', paginationPage.pagination);
    app.get('/buyEvent', buyEventPage.show_buyEvent);
    app.post('/buyEvent/upload',buyEventPage.buyEvent);
    app.get('/contactUs', contactUsPage.contactUs);
    app.get('/tag/:tag', productPage.pTagList);
    app.get('/experiment',productPage.experiment2);
}