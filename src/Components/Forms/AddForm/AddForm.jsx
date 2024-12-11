import { Field, Form, Formik } from "formik";

const AddForm = () => {
  return (
    <>
      <p>Add FORM</p>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, options) => {
          console.log({ ...values, completed: false });
          console.log(options);
        }}
      >
        {() => (
          <Form>
            <Field name="name" type="text" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddForm;
