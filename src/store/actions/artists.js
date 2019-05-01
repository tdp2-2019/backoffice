export const REQUEST_ARTISTS = "REQUEST_ARTISTS";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const REQUEST_DRIVER = "REQUEST_DRIVER";


export function requestArtists() {
    return {
        type: REQUEST_ARTISTS
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

       return fetch("https://correapp-api.herokuapp.com/drivers")
            .then(response => response.json())
            .then((drivers) => drivers.map(formatArtistData))
            .then(artists => dispatch(receiveArtists(artists)));
    };

// Helpers

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

// const formatArtistData = ({
//                               id, name,
//                               images,
//                               photo_url, licensenumber, carcolour,
//                               brand, carlicenseplate, address, dni, email, lastname, model, rating, signup_date, telephone
//                           }) => ({
//     id,
//     name: name + " " + lastname,
//     imageUrl: photo_url
//         ? photo_url
//         : `https://api.adorable.io/avatars/285/${id}`,
//     followersCount: 0,
//     genres: [],
//     rating: rating,
//     car: brand + " " + model + " " + carcolour,
//     address: address,
//     dni, carlicenseplate, email, signup_date, telephone
// });

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
