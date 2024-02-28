import * as yup from "yup";

export const formSchema = yup.object().shape({
    username: yup.string().required("Required field"),
    token: yup.string().required("Required field"),
    status: yup.string().required("Required field"),
    saldo: yup.string().required("Required field"),
    password: yup.string().required("Required field"),
    id: yup.string().required("Required field"),
    criptomoeda: yup.string().required("Required field"),
});
