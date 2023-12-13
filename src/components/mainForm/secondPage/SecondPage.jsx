import css from "./SecondPage.module.css";
import { Formik, Field, Form } from "formik";

export const SecondPage = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.next({ [name]: value });
  };

  return (
    <div>
      <h1>Choose your goal</h1>
      <Formik onSubmit={handleSubmit} initialValues={props.data}>
        <Form autoComplete="off">
          <div>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="goal"
                value="Lose weight"
                onChange={handleChange}
              />
              Lose weight
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="goal"
                value="Get perfect fit body"
                onChange={handleChange}
              />
              Get perfect fit body
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="goal"
                value="Tone muscles"
                onChange={handleChange}
              />
              Tone muscles
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="goal"
                value="Be healthier"
                onChange={handleChange}
              />
              Be healthier
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
