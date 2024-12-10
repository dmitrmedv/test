import { Field, Form, Formik } from "formik";

const Home = () => {
  let obj = null;
  return (
    <>
      <Formik
        initialValues={obj ?? { name: "", age: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form>
            <Field type="text" name="name" />
            <Field type="text" name="age" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <button type="button" onClick={() => {}}>
        CLICK
      </button>
    </>
  );
};

export default Home;
