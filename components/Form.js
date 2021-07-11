import { Formik, useField, Form } from "formik";
import * as Yup from "yup";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}></label>
      <input className="text-lg text-gray-900 w-full" {...field} {...props} />
      <hr />
      {meta.touched && meta.error ? <div className="">{meta.error}</div> : null}
    </>
  );
};
const CheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className="">{meta.error}</div> : null}
    </>
  );
};

const FormComponent = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
        acceptedTerms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be at least 3 characters long")
          .max(15, "Must be  15 characters long or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.string().max("Invalid phone number"),
        message: Yup.string()
          .max(200, "Must be  200 characters long or less")
          .required("Required"),
        acceptedTerms: Yup.boolean()
          .required("Required")
          .oneOf([true], "You must accept the terms"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 3000);
      }}
    >
      {(props) => (
        <Form className="grid grid-rows gap-6 ">
          <TextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your first name"
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email "
          />
          <TextInput
            label="Phone"
            name="number"
            type="text"
            placeholder="Enter your phone number (optional) "
          />
          <TextInput
            label="Message"
            name="message"
            type="text"
            placeholder="Leave your message  "
          />
          <CheckBox name="acceptedTerms">
            I accept the terms and conditions
          </CheckBox>
          <button
            type="submit"
            className="m-10 p-4 capitalize border-2 border-gray-900 hover:bg-black hover:text-white"
          >
            {props.isSubmitting ? "Loading.." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;