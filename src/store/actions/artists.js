export const REQUEST_ARTISTS = "REQUEST_ARTISTS";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const REQUEST_DRIVER = "REQUEST_DRIVER";
export const REQUEST_TRIPS = "REQUEST_TRIPS";
export const RECEIVE_TRIPS = "RECEIVE_TRIPS";

export function requestArtists() {
    return {
        type: REQUEST_ARTISTS
    };
}

export function requestTrips() {
    return {
        type: REQUEST_TRIPS
    };
}

export function receiveTrips(trips) {
    return {
        type: RECEIVE_TRIPS,
        trips
    };
}

export function requestDriver() {
    return {
        type: REQUEST_DRIVER
    };
}

export function receiveArtists(artists) {
    return {
        type: RECEIVE_ARTISTS,
        artists
    };
}

export function fetchArtists() {
    return dispatch => {
        dispatch(requestArtists());
        console.log("FETCHEO DRIVERS");

       return fetch("https://correapp-api.herokuapp.com/drivers")
            .then(response => response.json())
            .then((drivers) => drivers.map(formatArtistData))
            .then(artists => dispatch(receiveArtists(artists)));
    };
}


export function fetchTrips() {
    return dispatch => {
        dispatch(requestTrips());
        console.log("FETCHEO TRIPS");
        return   fetch("https://correapp-api.herokuapp.com/trips?status=started")
            .then(response => response.json())
            .then((trips) => trips.map(formatTripData))
            .then(trips => dispatch(receiveTrips(trips)));
    };
}

export function fetchDriverById(driverId) {
    return dispatch => {
        dispatch(requestDriver());

        return fetch("https://correapp-api.herokuapp.com/drivers/" + driverId)
            .then(response => response.json())
            .then((drivers) => drivers.map(formatArtistData))
            .then(artists => dispatch(receiveArtists(artists)));
    };
}



const formatTripData = ({
                            id,
                            source,
                            destination, driver_id, points, currentposition
                        }) => ({
    id,
    source,
    destination, driver_id, points, currentposition
});


const formatArtistData = ({
                              id, name,
                              images,
                              photo_url, licensenumber, carcolour, license_photo_url, car_plate_photo_url,status,
                              brand, carlicenseplate, address, dni, email, lastname, model, rating, signup_date, telephone
                          }) => ({
    id,
    name: name + " " + lastname,
    car_plate_photo_url,
    license_photo_url,
    status,
    imageUrl: photo_url
        ? photo_url
        : `https://api.adorable.io/avatars/285/${id}`,
    followersCount: 0,
    genres: [],
    rating: rating,
    car: brand + " " + model + " " + carcolour,
    address: address,
    dni, carlicenseplate, email, signup_date, telephone
});
