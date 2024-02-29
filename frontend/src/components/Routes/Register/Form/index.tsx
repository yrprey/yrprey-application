import { Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/validators/register";
import Link from "next/link";
import { IFormRegister } from "@/interfaces/IFormRegister/IFormRegister";
import axios from "axios";
import Swal from "sweetalert2";
import { Context } from "@/context/context";
import { useContext } from "react";

const FormRegister = () => {
  const { router } = useContext(Context);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitRegister = async (data: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register`,
        data,
      );
      if (response.data.results[0].status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account created successfully",
          showConfirmButton: false,
          width: 600,
          padding: "3em",
          color: "#fff",
          background: "#28292a",
          backdrop: `rgba(0, 0, 0, 0.493)`,
          timer: 1500,
        });
        router.push("/login");
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
    <Form onSubmit={handleSubmit(onSubmitRegister)}>
      <div className="container-input ">
        <label className={"label"}>Email</label>
        <input
          className="input-email"
          type="text"
          placeholder="username"
          {...register("username")}
        />
      </div>
      <label className={errors.username ? "error" : "no-error"}>
        {errors.username?.message}
      </label>
      <div className="container-input ">
        <label className={"label"}>Password</label>
        <input
          className="input-password"
          type="password"
          placeholder="***********"
          {...register("password")}
        />
      </div>
      <label className={errors.password ? "error" : "no-error"}>
        {errors.password?.message}
      </label>
      <p>
        By signing up, you agree to our{" "}
        <span className="fictitious-terms">Terms</span> and{" "}
        <span className="fictitious-terms">Privacy Policy</span>.
      </p>
      <div className="container-button">
        <button type="submit" className="btn-sign-up">
          Sign up
        </button>
        <Link href="/login" className="link-signup">
          Log in
        </Link>
      </div>
    </Form>
  );
};

export default FormRegister;
