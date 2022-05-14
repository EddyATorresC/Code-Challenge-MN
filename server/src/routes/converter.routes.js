const {Router} = require("express");

const router = Router();

const converterCtrl = require('../controllers/converter.controller.js'); 

router.post('/lb-to-kg', converterCtrl.performConversionWeightPoundsToKilograms);
router.post('/kg-to-lb', converterCtrl.performConversionWeightKilogramsToPounds);

router.post('/ftpin-to-mtpcm', converterCtrl.performConversionHeightFeetAndInchesToMetersAndCentimeters);
router.post('/mtpcm-to-ftpin', converterCtrl.performConversionHeightMetersAndCentimetersToFeetAndInches);

router.post('/mi-to-km', converterCtrl.performConversionDistanceMilesToKilometers);
router.post('/km-to-mi', converterCtrl.performConversionDistanceKilometersToMiles);

router.post('/calculate-kg-lb', converterCtrl.performCalculationKgAndLb);

module.exports = router;