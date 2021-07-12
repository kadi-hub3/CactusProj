import { Formik, useField, Form } from "formik";
import * as Yup from "yup";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}></label>
      <input
        className="text-md md:text-2xl text-black w-full py-2 border-b-2 border-gray-500 md:h-15 tracking-wider italic"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <div className="">{meta.error}</div> : null}
    </>
  );
};
const CheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <label htmlFor={props.id || props.name} className="flex my-6">
        <input type="checkbox" className="w-8 h-8 mx-4" {...field} {...props} />
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
          .max(45, "Must be  15 characters long or less")
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
        <Form className="grid grid-rows gap-6  px-12 md:px-32 xl:ml-24 h-full w-full">
          <h1 className="font-serif text-3xl lg:text-6xl font-bold tracking-wide md:tracking-wider">
            <span className="pt-2 border-b-2 lg:border-b-4 border-red-600">
              Ask a{" "}
            </span>
            question
          </h1>
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
            <p className="text-md lg:text-xl text-gray-900">
              By submitting this form, you confirm that you have read and agree
              to Alessio Privacy Statement
            </p>
          </CheckBox>
          <button
            type="submit"
            className="m-10 p-4 capitalize border-2 border-gray-900 tracking-wider hover:bg-black hover:text-white"
          >
            {props.isSubmitting ? "Loading.." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
