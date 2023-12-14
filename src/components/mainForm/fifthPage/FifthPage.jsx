import css from "./FifthPage.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BackButton } from "../backButton/BackButton";

import lock from "../../../assets/quiz_img/image-926.png";

const EmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email. Example: mail@gmail.com")
    .matches(
      /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-zA-Z]{2,6}$/,
      "Invalid email. Example: mail@gmail.com"
    )
    .required("Please, enter your email"),
});

export const FifthPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <>
      <h1 className={css.quiz_title}>
        Enter your email to get your Personal Weight loss Plan!
      </h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={props.data}
        validationSchema={EmailValidationSchema}
      >
        <Form className={css.form_container} autoComplete="off">
          <div className={css.input_wrpr}>
            <Field
              className={css.email_input}
              type="email"
              autoFocus
              name="email"
              placeholder="Your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={css.error_msg}
            />
          </div>

          <div className={css.policy_wrpr}>
            <div className={`${css.policy} ${css.color_secondary_mono_1}`}>
              <img
                className={css.img}
                src={lock}
                alt="policy"
                width={32}
                height={32}
              />
              <p className={css.policy_info}>
                We respect your privacy and use your email only to send you the
                Food-mentor program and other important emails. You won't
                receive spam
              </p>
            </div>

            <button
              className={`${css.styled_btn} ${css.color_brand_main}`}
              type="submit"
              aria-label="Get my plan"
            >
              Get my plan
            </button>
          </div>
          <BackButton handlePrev={props.prev} />
        </Form>
      </Formik>
    </>
  );
};
