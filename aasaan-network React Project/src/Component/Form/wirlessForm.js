import * as Yup from "yup";

export const wirlessInitialValue = () => {
    return { name: '', encryption: 'open', network: '' }
}

export const WirlessSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required"),
    encryption: Yup.string()
        .required("Encryption is required"),
    network: Yup.string()
    .required("Network is required"),
});
