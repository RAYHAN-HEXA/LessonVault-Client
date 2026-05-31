import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const usePremium = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    if (!user?.email) return;

    axiosInstance
      .get(`/users?email=${user.email}`)
      .then((res) => {
        setIsPremium(Boolean(res.data?.[0]?.isPremium));
      })
      .catch(() => {
        // Silently handle error
      });
  }, [user?.email, axiosInstance]);

  return isPremium;
};

export default usePremium;