const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=8b0a8228e9421a2ed33f2db1138e1e90&query=${latitude},${longitude}&units=f`;
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to contact to weather service!", undefined);
    } else if (body.error) {
      callback("Unabel to find location", undefined);
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%.`);
    }
  });
};

module.exports = forecast;