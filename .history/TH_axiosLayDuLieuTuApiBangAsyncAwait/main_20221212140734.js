axios = require('axios');

async function getJSONAsync() {
    let json = await axios.get('http://jsonplaceholder.typicode.com/posts/1')
}