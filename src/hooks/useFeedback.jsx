import { useState } from "react";
import { fetchFeedback } from "../firebase/feedback";

export function useFeedback() {
    const [feedbackList, setFeedbackList] = useState();
    const [listLoadingFeedback, setListLoading] = useState(false);

    const getFeedbackList = async () => {
        setListLoading(true);
        const listResult = await fetchFeedback();
        setFeedbackList(listResult[0].data.feedback);
        setListLoading(false);
    };

    return {
        listLoadingFeedback,
        feedbackList,
        getFeedbackList,
    };
}
