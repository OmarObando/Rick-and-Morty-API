const axios  = require('axios');
//We could use differents folders for each service, but in this case we aren't going to do it 
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
        if (response.status !== 200) {
            throw new Error(`Error fetching characters: ${response.statusText}`);
        }
        return response.data.results;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCharacters
}