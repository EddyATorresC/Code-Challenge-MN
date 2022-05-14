
const converterCtrl = {};


converterCtrl.performConversionWeightPoundsToKilograms = async (req, res) => {
    let response = "";
    let message = "";
    let responseCode = 400;
    let plainValue;
    
    if(isNaN(Number(req.body.value))){
        response = "Not a number provided";
        message = "error";
    }else{
        let rate = 0.453592;
        response = `The amount of ${req.body.value} ${req.body.value == 1 ? 'pound': 'pounds'} is equivalent to ${Number(rate*req.body.value).toFixed(2)} ${Number(rate*req.body.value) == 1 ? 'kilogram' :'kilograms'}.`
        message = "success";
        responseCode = 200;
        plainValue = Number(rate*req.body.value).toFixed(2);
    }
    res.status(responseCode).send({
        message,
        response,
        plainValue
    });
};

converterCtrl.performConversionWeightKilogramsToPounds = async (req, res) => {
    let response = "";
    let message = "";
    let responseCode = 400;
    let plainValue;
    
    if(isNaN(Number(req.body.value))){
        response = "Not a number provided";
        message = "error";
    }else{
        let rate = 2.20462;
        response = `The amount of ${req.body.value} ${req.body.value == 1 ? 'kilogram': 'kilograms'} is equivalent to ${Number(rate*req.body.value).toFixed(2)} ${Number(rate*req.body.value) == 1 ? 'pound' :'pounds'}.`
        message = "success";
        responseCode = 200;
        plainValue = Number(rate*req.body.value).toFixed(2);
    }
    res.status(responseCode).send({
        message,
        response,
        plainValue
    });
};

converterCtrl.performCalculationKgAndLb = async (req,res) => {
    let response = "";
    let message = "";
    let responseCode = 400;
    let plainValue;
    
    if(isNaN(Number(req.body.valueKg)) || isNaN(Number(req.body.valueLb))){
        response = "Not a number provided";
        message = "error";
    }else{
        let rateKgToLb = 2.20462;
        let rateLbToKg = 0.453592;
        let operation = req.body.operation;
        if(operation == "add"){
            response = `The addition of ${Number(req.body.valueKg).toFixed(2)} kilograms and ${Number(req.body.valueLb).toFixed(2)} pounds equals: ${Number(Number(req.body.valueKg) + Number(req.body.valueLb)*rateLbToKg).toFixed(2)} kilograms which is equal to ${Number(Number(req.body.valueKg)*rateKgToLb + Number(req.body.valueLb)).toFixed(2)} pounds`;
        }else if(operation == "substract"){
            response = `The substraction of ${Number(req.body.valueKg).toFixed(2)} kilograms and ${Number(req.body.valueLb).toFixed(2)} pounds equals: ${Math.abs(Number(Number(req.body.valueKg) - Number(req.body.valueLb)*rateLbToKg)).toFixed(2)} kilograms which is equal to ${Math.abs(Number(Number(req.body.valueKg)*rateKgToLb - Number(req.body.valueLb))).toFixed(2)} pounds in its absolute value`
        }else{
            response = `Not supported yet`;
        }
        message = "success";
        responseCode = 200;
    }
    res.status(responseCode).send({
        message,
        response,
        plainValue
    });
}

converterCtrl.performConversionHeightFeetAndInchesToMetersAndCentimeters = async (req, res) => {
    let response = "";
    let message = "";
    let responseCode = 400;
    
    if(isNaN(Number(req.body.feetValue)) || isNaN(Number(req.body.inchesValue))){
        response = "Not a number provided";
        message = "error";
    }else{
        let feetTocmRate = 30.48;
        let inchesTocmRate = 2.54;
        let totalCm = req.body.feetValue*feetTocmRate + req.body.inchesValue*inchesTocmRate;
        let meters = Math.trunc(totalCm/100);
        response = `The amount of ${req.body.feetValue} feet and ${req.body.inchesValue} inches is equivalent to ${meters} meters and ${Number(totalCm - meters*100).toFixed(2)} centimeters.`
        message = "success";
        responseCode = 200;
    }
    res.status(responseCode).send({
        message,
        response
    });
};

converterCtrl.performConversionHeightMetersAndCentimetersToFeetAndInches = async (req, res) => {
    let response = "";
    let message = "";
    let responseCode = 400;
    
    if(isNaN(Number(req.body.meterValue)) || isNaN(Number(req.body.cmValue))){
        response = "Not a number provided";
        message = "error";
    }else{
        let metersToInchesRate = 39.3701;
        let cmToinchesRate = 0.393701;
        let totalInches= req.body.meterValue*metersToInchesRate + req.body.cmValue*cmToinchesRate;
        let feet = Math.trunc(totalInches/12);
        response = `The amount of ${req.body.meterValue} meters and ${req.body.cmValue} centimeters is equivalent to ${feet} feet and ${Number(totalInches - feet*12).toFixed(2)} inches.`
        message = "success";
        responseCode = 200;
    }
    res.status(responseCode).send({
        message,
        response
    });
};

converterCtrl.performConversionDistanceMilesToKilometers = async (req, res) => {
    let response = "";
    let message = "";
    let responseCode = 400;
    
    if(isNaN(Number(req.body.value))){
        response = "Not a number provided";
        message = "error";
    }else{
        let rate = 1.609344;
        response = `The amount of ${req.body.value} ${req.body.value == 1 ? 'mile': 'miles'} is equivalent to ${Number(rate*req.body.value).toFixed(2)} ${Number(rate*req.body.value) == 1 ? 'kilometer' :'kilometers'}.`
        message = "success";
        responseCode = 200;
    }
    res.status(responseCode).send({
        message,
        response
    });
};

converterCtrl.performConversionDistanceKilometersToMiles = async (req, res) => {
    let response = "";
    let message = "";
    let responseCode = 400;
    
    if(isNaN(Number(req.body.value))){
        response = "Not a number provided";
        message = "error";
    }else{
        let rate = 0.621371;
        response = `The amount of ${req.body.value} ${req.body.value == 1 ? 'kilometer': 'kilometers'} is equivalent to ${Number(rate*req.body.value).toFixed(2)} ${Number(rate*req.body.value) == 1 ? 'mile' :'miles'}.`
        message = "success";
        responseCode = 200;
    }
    res.status(responseCode).send({
        message,
        response
    });
};

module.exports = converterCtrl;