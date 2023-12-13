import css from "./FifthPage.module.css";
import { Formik, Field, Form } from "formik";

export const FifthPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <div>
      <h1>Enter your email to get your Personal Weight loss Plan!</h1>
      <Formik onSubmit={handleSubmit} initialValues={props.data}>
        <Form autoComplete="off">
          <div>
            <Field
              type="email"
              autoFocus
              name="email"
              placeholder="Your email"
            />
          </div>
          <button type="submit" aria-label="Get my plan">
            Get my plan
          </button>
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
