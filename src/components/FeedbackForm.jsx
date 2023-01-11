import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useFeedback } from "../context/feedback";
import typeCreator from "../context/typeCreator";

export default function FeedbackForm() {
    const [text, setText] = React.useState("");
    const [rating, setRating] = React.useState(10);
    const [btnDisabled, setBtnDisabled] = React.useState(true);
    const [message, setMessage] = React.useState("");
    const { dispatch } = useFeedback();

    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== "" && text.trim().length < 10) {
            setBtnDisabled(true);
            setMessage("text must be at least 10 characters");
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newFeedback = {
            id: Math.round(Math.random() * (100000 - 1)),
            rating,
            text,
        };
        const response = await fetch("http://localhost:5000/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFeedback),
        });
        const data = await response.json();
        dispatch(typeCreator("addFeedback", data));
        setText("");
        setBtnDisabled(true);
    };
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rate) => setRating(rate)} />
                <div className="input-group">
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="write a review"
                    />
                    <Button
                        type="submit"
                        version="secondary"
                        isDisabled={btnDisabled}
                    >
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
}
