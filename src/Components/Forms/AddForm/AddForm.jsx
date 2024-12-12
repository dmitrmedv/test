import { Field, Form, Formik } from "formik";
import List from "../../List/List";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/todo/operations";
import { nanoid } from "@reduxjs/toolkit";

const AddForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p>Add FORM</p>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, options) => {
          // console.log({ ...values, completed: false });
          // console.log(options);
          dispatch(addTodo({ ...values, completed: false, id: nanoid() }));
          options.resetForm();
        }}
      >
        {() => (
          <Form>
            <Field name="name" type="text" />
          </Form>
        )}
      </Formik>
      <List />
    </>
  );
};

export default AddForm;
