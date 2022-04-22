const initialState = {
    user: {},
    loggedIn: false,
    bots: [],
    cases: [],
}

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_BOTS":
            return{...state,bots:action.payload}
        case "GET_CASES_DATE":
            return{...state,cases:action.payload}
        case "GET_ALL_CASES":
            return{...state,cases:action.payload}
        case "LOGIN_USER":
            if (action.payload.token) {
                const token = action.payload.token;
                const user = {
                    id: action.payload.id,
                    email: action.payload.email,
                    name: action.payload.first_name,
                    lastName: action.payload.last_name,
                };
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                return { ...state, user: user, loggedIn: true };
            } 
            else{
              return { ...state, user: {}, loggedIn: false };
            }
        case "LOG_OUT_USER":
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return { ...state, user: {}, loggedIn: false };
        default: return state;
    }
}

export default rootReducer;