import store, { handleChange } from "../store";


function success(pos: any) {
    const crd = pos.coords;
    store.dispatch(handleChange('myLocation', { lat: crd.lat, lon: crd.lon }));
    return crd;
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function error(err: any) {
    console.error(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);