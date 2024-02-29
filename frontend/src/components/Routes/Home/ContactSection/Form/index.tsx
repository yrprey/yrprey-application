import { Form } from "./style";
import { formSchema } from "@/validators/contact";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormContact } from "@/interfaces/IFormContact/IFormContact";
import axios from "axios";
import Swal from "sweetalert2";

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormContact>({
    resolver: yupResolver(formSchema),
  });

  const onSendMessage = async (data: any) => {
    try {
      const dataToSend = { ...data, dest: "contact@yrprey.com" };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/message`,
        dataToSend,
      );
      if (response.data.results[0].status === 200) {
        localStorage.setItem("token", response.data.results[0].token);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message sent successfully",
          showConfirmButton: false,
          width: 600,
          padding: "3em",
          color: "#fff",
          background: "#28292a",
          backdrop: `rgba(0, 0, 0, 0.493)`,
          timer: 1500,
        });
        reset();
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "ASomething went wrong. Please check your data and try again.",
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
    <Form onSubmit={handleSubmit(onSendMessage)}>
      <label className={errors.name ? "error-column" : "no-error-column"}>
        {errors.name?.message}
      </label>
      <input
        className="input-name"
        type="text"
        placeholder="Your Name"
        {...register("name")}
      />
      <div className="input-contact">
        <div>
          <label className={errors.phone ? "error-row" : "no-error-row"}>
            {errors.phone?.message}
          </label>
          <input
            type="number"
            placeholder="Your Phone Number"
            {...register("phone")}
          />
        </div>
        <div>
          <label className={errors.mail ? "error-row" : "no-error-row"}>
            {errors.mail?.message}
          </label>
          <input type="email" placeholder="Your Mail" {...register("mail")} />
        </div>
      </div>
      <label className={errors.subject ? "error-column" : "no-error-column"}>
        {errors.subject?.message}
      </label>
      <input
        type="text"
        className="input-subject"
        placeholder="Subject"
        {...register("subject")}
      />
      <label
        className={errors.textMessage ? "error-column" : "no-error-column"}
      >
        {errors.textMessage?.message}
      </label>
      <textarea
        placeholder="Your Message"
        {...register("textMessage")}
      ></textarea>
      <button type="submit" className="btn-send-message">
        Send Message
      </button>
    </Form>
  );
};

export default FormContact;
