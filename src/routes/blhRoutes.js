const express = require('express');
const BLHController = require('../controllers/blhController');
const router = express.Router();

router.get('/blhs', BLHController.getAll);
router.get('/blhs/region/:region', BLHController.getByRegion);
router.get('/blhs/type/:type', BLHController.getByType);
router.get('/blhs/city/:city', BLHController.getByCity);
router.get('/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});


module.exports = router;
