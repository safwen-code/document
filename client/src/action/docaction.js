import axios from "axios";
// import {GET_DOCUMENTS} from "./types"


 // axios document
 export const getdocument = () => dispatch => {
 
    axios.get("/mentor").then(res =>
      dispatch({
        type: "GET_DOCUMENTS",
        payload: res.data
      })
      
    );
  };
  