import * as yup from "yup";

export const formSchema = yup.object().shape({
    email: yup
    .string()
    .required("Enter your email address")
    .email("Invalid email"),
});