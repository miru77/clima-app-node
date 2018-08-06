const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e5e045ff662b39d576c8bc74d427fc68`)


    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la cuidad ${direccion}`);
    }


    return resp.data.main.temp;
}

module.exports = {
    getClima
}