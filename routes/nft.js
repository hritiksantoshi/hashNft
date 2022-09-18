const router = require('express').Router();
const {Upload} = require('../middlewares/upload')
const {NftGen} = require('../controllers/index')
router.post('/NFTGEN',Upload,NftGen);
module.exports = router;