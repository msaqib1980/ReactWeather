var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=fce8eea2769a4bd4ddc5f180ca039a07&units=imperial';
//fce8eea2769a4bd4ddc5f180ca039a07
module.exports = {
    getTemp: function (location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
       
       return axios.get(requestUrl).then(function(result){
            if (result.cod && result.message) {
                throw new Error(result.message);
            }else {
                return result.data.main.temp;
            }
        },function(err){
            throw new Error(err.message);
        });
    }
}