/**
 * Created by tangyitangyi on 16/8/3.
 */
var  express=require('express');
var  router=express.Router();

router.get('/', function(req, res, next) {
    res.render('index.html', { title: 'Express' });
});

module.exports = router;