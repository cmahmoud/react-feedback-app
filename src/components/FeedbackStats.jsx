import React from "react";
import PropTypes from "prop-types";
import { useFeedback } from "../context/feedback";

export default function FeedbackStats() {
    const {
        state: { feedback },
    } = useFeedback();
    let average = feedback.reduce((acc, current) => acc + current.rating, 0);
    average /= feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/, "");
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Rating Average: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
}
