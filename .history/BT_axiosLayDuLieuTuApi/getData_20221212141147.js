const { default: axios } = require('axios');

axios = require('axios');

function getJSONAPI() {
    return new Promise(function(resolve) {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            
    }
}