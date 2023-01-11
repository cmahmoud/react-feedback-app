import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import FeedbackItem from "./FeedbackItem";
import { useFeedback } from "../context/feedback";

export default function FeedbackList() {
    const {
        state: { feedback, isLoading },
    } = useFeedback();
    const [parent] = useAutoAnimate({ duration: 400, easing: "ease-in-out" });
    /// return if no feedbacks
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className="feedback-list" ref={parent}>
            {feedback.map((item) => (
                <FeedbackItem item={item} key={item.id} />
            ))}
        </div>
    );
}
