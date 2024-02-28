import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { IChildren } from "@/interfaces/IChildren/IChildren";
import { IContext } from "@/interfaces/IContext/IContext";

export const Context = createContext<IContext>({} as IContext);

const Provider = ({ children }: IChildren) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
  const [user, setUser] = useState<any>({});
  const [tokenLocal, setTokenLocal] = useState<string>("");
  const [statusApi, setStatusApi] = useState<string>("");
  const router = useRouter();

  const showSideBar = () => setIsSideBarVisible((prevState) => !prevState);

  const fetchUserData = async () => {
    try {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setTokenLocal(storedToken);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/profile.php`,
          { token: storedToken },
        );
        if (response.data.results[0].status === 200) {
          setUser(response.data.results[0]);
        }
      }
    } catch (error) {
      error;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [setUser, , setTokenLocal, router]);

  return (
    <Context.Provider
      value={{
        router,
        tokenLocal,
        isMobile,
        showSideBar,
        isSideBarVisible,
        setIsSideBarVisible,
        user,
        setUser,
        setTokenLocal,
        statusApi,
        setStatusApi,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
