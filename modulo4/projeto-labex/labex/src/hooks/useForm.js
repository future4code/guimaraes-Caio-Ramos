import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const eraseForm = () => {
    setForm(initialState);
  };
  return { form, onChangeForm, eraseForm };
};
export default useForm;
