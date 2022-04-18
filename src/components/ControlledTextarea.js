import React, { useState, useEffect } from "react";
import { Textarea } from "@mantine/core";

const ControlledTextarea = ({ maxLength, ...props }) => {
  const [feedback, setFeedback] = useState("");
  const [feedbackError, setFeedbackError] = useState(false);

  useEffect(() => {
    if (feedback.replace(" ", "").length > maxLength) {
      setFeedbackError("Maximum length is " + maxLength);
    } else if (feedbackError !== false) {
      setFeedbackError(false);
    }
  }, [feedback]);

  return (
    <Textarea
      error={feedbackError}
      onChange={(e) => setFeedback(e.target.value)}
      {...props}
    />
  );
};

export default ControlledTextarea;
