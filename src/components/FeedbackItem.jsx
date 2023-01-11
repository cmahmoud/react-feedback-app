import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import { useFeedback } from "../context/feedback";
import typeCreator from "../context/typeCreator";

export default function FeedbackItem({ item }) {
    const { dispatch } = useFeedback();
    const handleDeleteFeedback = async () => {
        await fetch(`http://localhost:5000/feedback/${item.id}`, {
            method: "DELETE",
        }).then(() => {
            dispatch(typeCreator("removeFeedback", item.id));
        });
    };
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={handleDeleteFeedback} className="close">
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
};
