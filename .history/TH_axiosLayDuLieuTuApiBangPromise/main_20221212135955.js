const { default: axios } = require('axios');

axios = require('axios');
function getJSONAPI() {
    return new Promise(function(resolve) {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then(function(json) {
                resolve(json.data);
            });
    });
};

get