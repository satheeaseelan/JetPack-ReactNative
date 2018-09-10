import axios from "axios";
import { LHCBaseURL } from "./config";

//Call post method from actions with params 
//in body the post request body should be sent from the actions
//in endUrl, the endpoint for the request should be sent
export function postMethod(endUrl, body) {
  return axios
    .post(LHCBaseURL + endUrl, body)
    .then(response => {
      return { error: null, response };
    })
    .catch(error => {
      if (error.response) {
        return { error: error.response };
      }
    });
}

//Call PUT method from actions with params 
//in body the post request body should be sent from the actions
//in endUrl, the endpoint for the request should be sent
export function PUTMethod(endUrl, body) {
  return axios
    .put(`${LHCBaseURL}${endUrl}`, body)
    .then(response => {
      return { error: null, response };
    })
    .catch(error => {
      if (error.response) {
        return { error: error.response };
      }
    });
}

//Call get method from actions with params 
//in endUrl, the endpoint for the request should be sent
export function getMethod(endUrl,payload,successCallback,errorCallback) {
  return axios
    .get(`${LHCBaseURL}${endUrl}`)
    .then(response => (successCallback(response )))
    .catch(error => {
      if (error.response) {
        errorCallback(error.response)
      }
        errorCallback(error)
    });
}

//Call remove method from actions with params 
//in endUrl, the endpoint for the request should be sent
export function removeMethod(endUrl) {
  return axios
    .delete(`${LHCBaseURL}${endUrl}`)
    .then(response => ({ error: null, response }))
    .catch(error => {
      if (error.response) {
        return { error: error.response };
      }
      return error;
    });
}

//call this method from anywhere to set the authtoken as header in the API calls
export function setAuthHeaders(jwttoken) {
  axios.defaults.headers.common.auth = jwttoken;
}