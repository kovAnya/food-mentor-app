import css from "./ThirdPage.module.css";
import { Formik, Field, Form } from "formik";

export const ThirdPage = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.next({ [name]: value });
  };

  return (
    <div>
      <h1>Choose your current body type</h1>
      <Formik onSubmit={handleSubmit} initialValues={props.data}>
        <Form autoComplete="off">
          <div>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="body_type"
                value="Regular"
                onChange={handleChange}
              />
              Regular
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="body_type"
                value="Plumb"
                onChange={handleChange}
              />
              Plumb
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="body_type"
                value="Extra Plumb"
                onChange={handleChange}
              />
              Extra Plumb
            </label>
          </div>
          <button
            onClick={() => props.prev()}
            type="button"
            aria-label="back"
            className={css.btn}
          >
            Back
          </button>
        </Form>
      </Formik>
    </div>
  );
};
