import css from "./FirstPage.module.css";
import { Formik, Field, Form } from "formik";

export const FirstPage = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.next({ [name]: value });
  };

  return (
    <div>
      <h2>1-minute quiz</h2>
      <h1>Weight Loss Plan</h1>
      <p>Choose your gender to get started</p>
      <Formik onSubmit={handleSubmit} initialValues={props.data}>
        <Form autoComplete="off">
          <div>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              male
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              female
            </label>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
