export const actionNames = {
  FETCH_SUCCESS_HOTELS : "FETCH_SUCCESS_HOTELS",
  FETCH_ERROR_HOTELS   : "FETCH_ERROR_HOTELS",
  FETCH_LOADING        : "FETCH_LOADING",
};

export function fetchHotels(param) { 
    let attribute = "",
        endpoint  = "https://pure-dawn-30271.herokuapp.com/api",
        resource  = "hotel";

    if (param.type === "hotels") {
        resource  = "hotels";
    }

    if (param.type === "name") {
        attribute = "name";
    }

    if (param.type === "stars") {
        attribute = "stars";
    }

    if (param.data === 6) {
        resource  = "hotels";
    }

  return async (dispatch) => {
    dispatch({type: actionNames.FETCH_LOADING});
    
    try {
      let response = await fetch(`${endpoint}/${resource}?${attribute}=${param.data}`);
      let data = await response.json();

      dispatch({
        type: actionNames.FETCH_SUCCESS_HOTELS,
        data: data.hotels
      });
    } catch(error) {
      console.error("ERROR: ", error);
      dispatch({
        type: actionNames.FETCH_ERROR_HOTELS,
        error: `An error has occurred while fetching the data from resource\n ${error}`,
      });
    }
    
  }
}