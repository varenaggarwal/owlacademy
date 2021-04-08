import { useEffect, useState } from "react";
import { useData } from "../contexts/data-context";
import axios from "axios";
import { INITIAL_LOAD } from "../reducer/reducer";

export function useVideoListing() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useData();

  useEffect(() => {
    (async function () {
      setIsLoading(() => true);
      try {
        const serveResponse = await axios.get("/api/videos");
        dispatch({ type: INITIAL_LOAD, payload: serveResponse.data.videos });
        setIsLoading(() => false);
      } catch (error) {
        setError(() => error);
        setIsLoading(() => false);
      }
    })();
  }, []);
  return { isLoading, error };
}
