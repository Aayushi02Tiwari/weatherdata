console.log('client side js file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


// messageOne.textContent = 'From javaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then(
        (response) => {
            response.json().then((weatherData) => {
                if (weatherData.error) {
                    messageOne.textContent = weatherData.error
                    // console.log(weatherData.error)
                }
                else {

                    messageOne.textContent = weatherData.location
                    messageTwo.textContent = weatherData.forecast
                    // console.log(weatherData.location)
                    // console.log(weatherData.forecast)
                }

            })
        }
    )
})