import Image from "next/image";
import { FaCheckCircle, FaEthereum, FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "@/context/context";
import axios from "axios";
import Swal from "sweetalert2";

import { ICardShop } from "@/interfaces/IChildren/ICardShop";

import { StyledCardShop } from "./style";

const CardShop = ({
  image,
  title_image,
  title,
  name,
  value,
  id,
}: ICardShop) => {
  const { router, tokenLocal, user, setUser } = useContext(Context);

  const onSubmitPurchase = async (data: any) => {
    try {
      const loginResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/profile`,
        { token: tokenLocal },
      );
      if (loginResponse.data.results[0].status === 200) {
        localStorage.clear();
        localStorage.setItem("token", loginResponse.data.results[0].token);
        const user = loginResponse.data.results[0];
        const dataString = JSON.stringify(user);
        localStorage.setItem("user", dataString);
        setUser(user);
      }
    } catch (error) {
      error;
    }
    try {
      const purchaseResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/buy`,
        data,
      );
      if (purchaseResponse.data.results[0].status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Purchase made successfully",
          showConfirmButton: false,
          width: 600,
          padding: "3em",
          color: "#fff",
          background: "#28292a",
          backdrop: `rgba(0, 0, 0, 0.493)`,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Insufficient funds",
          showConfirmButton: false,
          width: 600,
          padding: "3em",
          color: "#fff",
          background: "#28292a",
          backdrop: `rgba(0, 0, 0, 0.493)`,
          timer: 1500,
        });
      }
    } catch (error) {
      error;
    }
  };

  const onSubmitDelete = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/delete`,
        {
          id: id,
          role: user.role,
          token: tokenLocal,
        },
      );
      if (response.data.results[0].status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully deleted",
          showConfirmButton: false,
          width: 600,
          padding: "3em",
          color: "#fff",
          background: "#28292a",
          backdrop: `rgba(0, 0, 0, 0.493)`,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: false,
          width: 600,
          padding: "3em",
          color: "#fff",
          background: "#28292a",
          backdrop: `rgba(0, 0, 0, 0.493)`,
          timer: 1500,
        });
      }
    } catch (error) {
      error;
    }
  };

  return (
    <StyledCardShop id={id}>
      <li className="card-container-shop">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div>
              <Image
                src={image}
                width="100"
                height="100"
                sizes="100"
                alt={title_image}
                className="img-card-shop"
              ></Image>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="text-content">
              <div>
                <h1 className="text-title">
                  YRPrey Club {title}
                  <span>
                    ﾠ<FaCheckCircle className="checked" />
                  </span>
                </h1>
                <span>
                  {user?.role == "1" ? (
                    <FaTrash className="eth trash" onClick={onSubmitDelete} />
                  ) : (
                    <FaEthereum className="eth" />
                  )}
                </span>
              </div>
              <p className="text-name-item">
                {name} {title}
              </p>
            </div>
            <div className="container-button">
              <div className="text-details">
                <p>Price</p>
                <p>{value} ETH</p>
              </div>
              <button
                className="btn-puschase-item"
                onClick={() =>
                  tokenLocal
                    ? onSubmitPurchase({
                        token: tokenLocal,
                        price: value,
                        saldo: user.saldo,
                      })
                    : router.push("/login")
                }
              >
                Puschase
              </button>
            </div>
          </div>
        </div>
      </li>
    </StyledCardShop>
  );
};

export default CardShop;
