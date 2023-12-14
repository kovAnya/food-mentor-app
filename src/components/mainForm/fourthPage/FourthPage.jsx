import css from "./FourthPage.module.css";
import { Formik, Field, Form } from "formik";

import workoutNot from "../../../assets/quiz_img/image-456.png";
import workoutWalk from "../../../assets/quiz_img/image-840.png";
import workoutTwoTimes from "../../../assets/quiz_img/image-879.png";
import workoutFiveTimes from "../../../assets/quiz_img/image-1963.png";

export const FourthPage = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.next({ [name]: value });
  };

  return (
    <>
      <h1 className={css.quiz_title}>Do you workout?</h1>
      <Formik onSubmit={handleSubmit} initialValues={props.data}>
        <Form autoComplete="off">
          <div>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="workout"
                value="No, I don't"
                onClick={handleChange}
              />
              No, I don't
              <div className={`${css.img_thmb} ${css.color_secondary_mono_1}`}>
                <img className={css.img} src={workoutNot} alt="No, I don't" />
              </div>
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="workout"
                value="Only walks"
                onClick={handleChange}
              />
              Only walks
              <div className={`${css.img_thmb} ${css.color_secondary_mono_1}`}>
                <img className={css.img} src={workoutWalk} alt="Only walks" />
              </div>
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="workout"
                value="1-2 times a week"
                onClick={handleChange}
              />
              1-2 times a week
              <div className={`${css.img_thmb} ${css.color_secondary_mono_1}`}>
                <img
                  className={css.img}
                  src={workoutTwoTimes}
                  alt="1-2 times a week"
                />
              </div>
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="workout"
                value="3-5 times a week"
                onClick={handleChange}
              />
              3-5 times a week
              <div className={`${css.img_thmb} ${css.color_secondary_mono_1}`}>
                <img
                  className={css.img}
                  src={workoutFiveTimes}
                  alt="3-5 times a week"
                />
              </div>
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
    </>
  );
};
