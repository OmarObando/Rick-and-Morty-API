const axios  = require('axios');

//RAM = Rick and Morty API
const RAM_URL = process.env.RAM_URL || 'https://rickandmortyapi.com/api/character';


const getCharacters = async (page = 1) => {
    let url = RAM_URL;
    if(page != 1){
        url = `${RAM_URL}/?page=${page}`;
    }
    try {
        const response = await axios.get(url, {
        });
        return response.results;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
}

module.exports = {
    getCharacters
}