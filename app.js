let lugar = require('./lugar/lugar');
let clima = require('./clima/clima');

// pasado a lugar.js   const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLarLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;

    } catch (error) {
        return `no se pudo encontrar el clima en ${direccion}`
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

/*  forma vieja de hacer 

lugar.getLugarLarLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));

clima.getClima(-34.6036844, -58.3815591)
    .then(temp => console.log(temp))
    .catch(e => console.log(e)); */



















//console.log(argv.direccion);



/*  pasado a lugar.js
let encodedUrl = encodeURI(argv.direccion);


axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    .then((resp) => {
        //console.log(JSON.stringify(resp.data, undefined, 2));
        let location = resp.data.results[0];
        let coordenadas = location.geometry.location;

        console.log(resp.data.results.formatted_address);
        console.log('Direccion; ', location.formatted_address);
        console.log('Lat; ', coordenadas.lat);
        console.log('Lng; ', coordenadas.lng);


    })
    .catch((err) => {
        console.log('Error!!!', err);
    });*/