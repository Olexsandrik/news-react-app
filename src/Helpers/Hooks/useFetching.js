import { useEffect, useState } from "react";

export const useFetching = (fetchFunction, params) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchFunction(params);
        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, stringParams]);

  return { data, isLoading, error };
};
