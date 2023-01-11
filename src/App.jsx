import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useFeedback } from "./context/feedback";

export default function App() {
    const {
        state: { isLoading },
    } = useFeedback();
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats />
                {isLoading ? <h3>Loading...</h3> : <FeedbackList />}
            </div>
        </>
    );
}
