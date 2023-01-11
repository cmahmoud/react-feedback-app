import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";
import { FeedbackProvider } from "./context/feedback";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FeedbackProvider>
            <App />
        </FeedbackProvider>
    </React.StrictMode>
);
