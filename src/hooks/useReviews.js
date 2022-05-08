import React, { useEffect, useState } from "react";
import axios from "axios";

export const useReviews = () => {
  // state
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("review.json").then((res) => setReviews(res.data));
  }, []);

  return [reviews, setReviews]
};
