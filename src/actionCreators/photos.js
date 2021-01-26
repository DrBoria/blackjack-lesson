import CONSTANTS from 'const'

export const getPhotoActionCreator = (photoName) => (dispatch) => {
    dispatch({
        type: CONSTANTS.ACTIONS.LOADING,
        payload: true
    });

    const pexelsQuery = `${process.env.REACT_APP_PEXELS_ENDPOINT}?query=${photoName}&per_page=4`;
    const response = fetch(pexelsQuery, {
        headers: {
            Authorization: process.env.REACT_APP_PEXELS_API_KEY
        }
    });

    // Query ended
    response.then((data) => data.json()).then(
        (data) => {
            dispatch({
                type: CONSTANTS.ACTIONS.PHOTOS,
                payload: data.photos
            });

            dispatch({
                type: CONSTANTS.ACTIONS.LOADING,
                payload: false
            });
        }
    );
}