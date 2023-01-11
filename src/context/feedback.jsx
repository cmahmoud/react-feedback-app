import React from "react";
import typeCreator from "./typeCreator";

const FeedbackContext = React.createContext();

const initialState = {
    feedback: [],
    isLoading: true,
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "setAllFeedback":
            return { ...state, feedback: payload };
        case "addFeedback":
            return { ...state, feedback: [payload, ...state.feedback] };
        case "removeFeedback":
            return {
                ...state,
                feedback: state.feedback.filter((item) => item.id !== payload),
            };
        case "setLoading":
            return { ...state, isLoading: payload };
        default:
            return state;
    }
};

export const FeedbackProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    React.useEffect(() => {
        fetchFeedback();
    }, []);
    const fetchFeedback = async () => {
        const res = await fetch("http://localhost:5000/feedback?_sort=id");
        const data = await res.json();
        dispatch(typeCreator("setAllFeedback", data));
        dispatch(typeCreator("setLoading", false));
    };
    return (
        <FeedbackContext.Provider value={{ state, dispatch }}>
            {children}
        </FeedbackContext.Provider>
    );
};
export const useFeedback = () => {
    return React.useContext(FeedbackContext);
};
