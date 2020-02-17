const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWF5dXNoaTAyIiwiYSI6ImNrNjV6ZDdyZDAyMmMzbW5va3Vlejh6aTIifQ.iH-U9aXIId-G9FB0HUJH7A&limit=1'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to local services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search. ', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode