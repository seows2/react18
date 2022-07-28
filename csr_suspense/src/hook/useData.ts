import { useEffect, useState } from "react";

const _sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

type ResponseD = {
  name?: string;
  avatar_url?: string;
};
const useData = (userId: string) => {
  const [data, setData] = useState<ResponseD>({});
  const [isLoading, setIsLoading] = useState(true);

  const request = async (url: string) => {
    setIsLoading(true);
    await _sleep(1500);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw errorData;
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    request(`https://api.github.com/users/${userId}`).then(setData);
  }, [userId]);

  return { data, isLoading };
};

export default useData;
