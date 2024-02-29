import { Context } from "@/context/context";
import { useContext, useEffect } from "react";
import { StyledStatusApi } from "./style";
import axios from "axios";

const StatusApi = () => {
  const { statusApi, setStatusApi } = useContext(Context);

  const onApiStatus = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/ssrf`, {
        params: {
          endereco: "localhost",
          port: 80,
        },
      });
      if (response.data.results[0].status === 200) {
        setStatusApi("green");
      } else {
        setStatusApi("red");
      }
    } catch (error) {
      error;
    }
  };

  useEffect(() => {
    onApiStatus();
  }, []);

  return (
    <>
      <StyledStatusApi
        style={{ background: statusApi === "green" ? "#04b10a" : "#e23e32" }}
      >
        {statusApi === "green" ? (
          <>
            <p>Back end on</p>
          </>
        ) : (
          <>
            <p>Back end off</p>
          </>
        )}
      </StyledStatusApi>
    </>
  );
};

export default StatusApi;
