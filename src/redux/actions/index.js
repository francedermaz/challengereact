import axios from 'axios';

export function getBots() {
    return async function (dispatch) {
        let token = "";
        if (localStorage.getItem("token")) {
          token = localStorage.getItem("token");
        }
        let req = await axios.get("https://admindev.inceptia.ai/api/v1/clients/", { headers: {"authorization" : `JWT ${token}`} })
        return dispatch({
            type: "GET_BOTS",
            payload: req.data,
        });
    };
}

export function getCasesDate(obj) {
    return async function (dispatch) {
        let token = "";
        if (localStorage.getItem("token")) {
          token = localStorage.getItem("token");
        }
        let req = await axios.get(`https://admindev.inceptia.ai/api/v1/inbound-case/?client=${obj.id}&local_updated__date__gte=${obj.start}&local_updated__date__lte=${obj.end}`, { headers: {"authorization" : `JWT ${token}`} })
        console.log(req);
        return dispatch({
            type: "GET_CASES_DATE",
            payload: req.data,
        });
    };
}

export function getAllCases(id){
    return async function (dispatch) {
        let token = "";
        if (localStorage.getItem("token")) {
            token = localStorage.getItem("token");
        }   
        let req = await axios.get(`https://admindev.inceptia.ai/api/v1/inbound-case/?client=${id}`, { headers: {"authorization" : `JWT ${token}`} })
        return dispatch({
            type: "GET_ALL_CASES",
            payload: req.data,
        });
    }
};

export function loginUser(payload) {
    return async function (dispatch) {
        let req = await axios.post("https://admindev.inceptia.ai/api/v1/login/",payload);
        return dispatch({
            type: "LOGIN_USER",
            payload: req.data,
        });
    };
}
  
export function logoutUser() {
    return async function (dispatch) {
        return dispatch({
            type: "LOG_OUT_USER",
        });
    };
}