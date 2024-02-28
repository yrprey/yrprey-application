import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Required field")
    .min(3, "Password must be at least 3 characters long")
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/,
      "The name must contain only letters"
    ),
  phone: yup
    .string()
    .required("Required field")
    .max(15, "Maximum of 15 characterss"),
  mail: yup
    .string()
    .required("Required field")
    .email("Invalid email")
    .matches(/^[a-z0-9\\_.]+@[a-z]+\.([a-z]+)$/, "Check your email"),
  subject: yup.string().required("Required field"),
  textMessage: yup.string().required("Required field")
  .min(5, "Password must be at least 5 characters long")
  .max(413, "The password must have a maximum of 413 characters"),
});

