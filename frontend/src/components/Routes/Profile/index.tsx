import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Form, StyledProfileSection } from "./style";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import SEO from "@/components/SEO";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/validators/profile";
import { IFormProfile } from "@/interfaces/IFormProfile/IFormProfile";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";
import Image from "next/image";
import { Context } from "@/context/context";
import { useContext, useEffect } from "react";
import Error404Page from "@/components/ErrorPage";

const Profile = () => {
  const { setUser, router, tokenLocal } = useContext(Context);
  let user = null;

  if (typeof window !== "undefined") {
    const userLocal = localStorage.getItem("user");

    if (!userLocal) {
    } else {
      const userString = localStorage.getItem("user") || "";
      user = JSON.parse(userString);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProfile>({
    resolver: yupResolver(formSchema),
    defaultValues: user,
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  if (!tokenLocal) {
    return (
      <>
        <Error404Page />
      </>
    );
  }

  const onSubmitRegister = async (data: any) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API}/reset.php?password=${data.password}&token=${data.token}&username=${data.username}`;
      const response = await axios.post(url, data);
      if (response.data.results[0].status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data updated successfully",
          showConfirmButton: false,
          width: 600,
          padding: "3em",
          color: "#fff",
          background: "#28292a",
          backdrop: `rgba(0, 0, 0, 0.493)`,
          timer: 1500,
        });
        const urlProfile = `${process.env.NEXT_PUBLIC_API}/profile`;
        const responseProfile = await axios.post(urlProfile, {
          token: data.token,
        });
        const user = responseProfile.data.results[0];
        const dataString = JSON.stringify(user);
        localStorage.setItem("user", dataString);
        setUser(user);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title:
            "Something went wrong. Please check your credentials and try again.",
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
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Profile • YRPrey"
        description="Join us in the search for bugs and vulnerabilities!"
      />
      <Header />
      <StyledProfileSection>
        <Form onSubmit={handleSubmit(onSubmitRegister)}>
          <Image
            className="user-yrprey"
            src={"/user-yrprey.webp"}
            alt="user-yrprey"
            width={10000}
            height={10000}
          />
          <Link href={"/transactions"} className="link-transactions">
            See my transactions
          </Link>
          <div className="container">
            <div className="container-input ">
              <label className={"label"}>Username</label>
              <input
                type="text"
                className="input"
                placeholder="Username"
                {...register("username")}
              />
              <label className={errors.username ? "error" : "no-error"}>
                {errors.username?.message}
              </label>
            </div>

            <div className="container-input ">
              <label className={"label"}>Password</label>
              <input
                type="text"
                className="input"
                placeholder="Password"
                {...register("password")}
              />
              <label className={errors.password ? "error" : "no-error"}>
                {errors.password?.message}
              </label>
            </div>

            <div className="container-input ">
              <label className={"label"}>Token</label>
              <input
                type="text"
                className="input"
                placeholder="Token"
                {...register("token")}
                disabled
              />
              <label className={errors.token ? "error" : "no-error"}>
                {errors.token?.message}
              </label>
            </div>

            <div className="container-input ">
              <label className={"label"}>Id</label>
              <input
                type="text"
                className="input"
                placeholder="Id"
                {...register("id")}
                disabled
              />
              <label className={errors.id ? "error" : "no-error"}>
                {errors.id?.message}
              </label>
            </div>

            <div className="container-input ">
              <label className={"label"}>Saldo</label>
              <input
                type="text"
                className="input"
                placeholder="Saldo"
                {...register("saldo")}
                disabled
              />
              <label className={errors.saldo ? "error" : "no-error"}>
                {errors.saldo?.message}
              </label>
            </div>

            <div className="container-input ">
              <label className={"label"}>Criptomoeda</label>
              <input
                type="text"
                className="input"
                placeholder="Criptomoeda"
                {...register("criptomoeda")}
                disabled
              />
              <label className={errors.criptomoeda ? "error" : "no-error"}>
                {errors.criptomoeda?.message}
              </label>
            </div>
          </div>
          <button className="btn" type="submit">
            Salvar
          </button>
        </Form>
      </StyledProfileSection>
      <Footer />
      <HomeButton />
    </motion.div>
  );
};

export default Profile;
