const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/94bd5b7ab3448ae1f7c50a8d653e806c/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (body.error) {
            callback('unable to find the location', undefined)
        }
        else {
            // console.log('It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain')
            // console.log(response.body.timezone)
            console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. This hight today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })

}
module.exports = forecast
// this is a new command
// if(error){
//     return console.log(error)
// }
// new update