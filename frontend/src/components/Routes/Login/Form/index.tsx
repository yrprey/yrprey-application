import { Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/validators/login";
import { IFormLogin } from "@/interfaces/IFormLogin/IFormLogin";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { Context } from "@/context/context";
import { useContext } from "react";

const FormLogin = () => {
  const { router } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      console.log(process.env.NEXT_PUBLIC_API);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/login.php`,
        data,
      );
      if (typeof response.data === "string") {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${response.data}`,
          showConfirmButton: false,
          width: 600,
          padding: "3em",
          color: "#fff",
          background: "#28292a",
          backdrop: `rgba(0, 0, 0, 0.493)`,
          timer: 1500,
        });
      } else if (response.data.results[0].status === 200) {
        localStorage.setItem("token", response.data.results[0].token);
        const user = response.data.results[0];
        const dataString = JSON.stringify(user);
        localStorage.setItem("user", dataString);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome again",
          showConfirmButton: false,
          width: 600,
          padding: "3em",
          color: "#fff",
          background: "#28292a",
          backdrop: `rgba(0, 0, 0, 0.493)`,
          timer: 1500,
        });
        router.push("/");
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title:
            "Algo deu errado. Por favor, verifique suas credenciais e tente novamente.",
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-input ">
        <label className={"label"}>Username</label>
        <input
          className="input-email"
          type="text"
          placeholder="Your username"
          {...register("username")}
        />
      </div>
      <label className={errors.username ? "error" : "no-error"}>
        {errors.username?.message}
      </label>
      <div className="container-input ">
        <label className={"label"}>Password</label>
        <input
          type="password"
          className="input-password"
          placeholder="Your Password"
          {...register("password")}
        />
      </div>
      <label className={errors.password ? "error" : "no-error"}>
        {errors.password?.message}
      </label>
      <a className="link">Forgot your password?</a>
      <div className="container-button">
        <button type="submit" className="btn-login">
          Log in
        </button>
        <Link href="/register" className="link-signup">
          Sign up
        </Link>
      </div>
    </Form>
  );
};

export default FormLogin;
