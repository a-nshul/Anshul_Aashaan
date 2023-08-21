import * as Yup from "yup";

export const deviceInitialValue = () => {
    return { key: '' }
}

export const DeviceSchema = Yup.object().shape({
    key: Yup.string()
        .required("Key is required")
});
