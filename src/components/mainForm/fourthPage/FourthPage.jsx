import css from "./FourthPage.module.css";
import { Formik, Field, Form } from "formik";

export const FourthPage = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.next({ [name]: value });
  };

  return (
    <div>
      <h1>Do you workout?</h1>
      <Formik onSubmit={handleSubmit} initialValues={props.data}>
        <Form autoComplete="off">
          <div>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="workoute"
                value="No, I don't"
                onChange={handleChange}
              />
              No, I don't
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="workout"
                value="Only walks"
                onChange={handleChange}
              />
              Only walks
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="workout"
                value="1-2 times a week"
                onChange={handleChange}
              />
              1-2 times a week
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="workout"
                value="3-5 times a week"
                onChange={handleChange}
              />
              3-5 times a week
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
