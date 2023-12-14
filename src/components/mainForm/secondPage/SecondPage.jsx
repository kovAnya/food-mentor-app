import css from "./SecondPage.module.css";
import { Formik, Field, Form } from "formik";
import { BackButton } from "../backButton/BackButton";

import goalShapeLoose from "../../../assets/quiz_img/goal-1.png";
import goalShapePerfect from "../../../assets/quiz_img/goal-2.png";
import goalShapeTone from "../../../assets/quiz_img/goal-3.png";
import goalShapeHealthy from "../../../assets/quiz_img/goal-4.png";

export const SecondPage = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.next({ [name]: value });
  };

  return (
    <>
      <h1 className={css.quiz_title}>Choose your goal</h1>
      <Formik onSubmit={handleSubmit} initialValues={props.data}>
        <Form autoComplete="off">
          <div className={css.radio_wrpr}>
            <div className={css.radio_inner_wrpr}>
              <label className={css.radio_label}>
                <Field
                  className={css.radio_btn}
                  type="radio"
                  name="goal"
                  value="Lose weight"
                  onClick={handleChange}
                />
                <div
                  className={`${css.img_thmb} ${css.color_secondary_mono_1}`}
                >
                  <img
                    className={css.img}
                    src={goalShapeLoose}
                    alt="Lose weight"
                  />
                </div>
                Lose weight
              </label>
              <label className={css.radio_label}>
                <Field
                  className={css.radio_btn}
                  type="radio"
                  name="goal"
                  value="Get perfect fit body"
                  onClick={handleChange}
                />
                <div className={`${css.img_thmb} ${css.color_secondary_main}`}>
                  <img
                    className={css.img}
                    src={goalShapePerfect}
                    alt="Get perfect fit body"
                  />
                </div>
                Get perfect fit body
              </label>
            </div>
            <div className={css.radio_inner_wrpr}>
              <label className={css.radio_label}>
                <Field
                  className={css.radio_btn}
                  type="radio"
                  name="goal"
                  value="Tone muscles"
                  onClick={handleChange}
                />
                <div
                  className={`${css.img_thmb} ${css.color_secondary_mono_2}`}
                >
                  <img
                    className={css.img}
                    src={goalShapeTone}
                    alt="Tone muscles"
                  />
                </div>
                Tone muscles
              </label>
              <label className={css.radio_label}>
                <Field
                  className={css.radio_btn}
                  type="radio"
                  name="goal"
                  value="Be healthier"
                  onClick={handleChange}
                />
                <div
                  className={`${css.img_thmb} ${css.color_secondary_mono_3}`}
                >
                  <img
                    className={css.img}
                    src={goalShapeHealthy}
                    alt="Be healthier"
                  />
                </div>
                Be healthier
              </label>
            </div>
          </div>
          <BackButton handlePrev={props.prev} />
        </Form>
      </Formik>
    </>
  );
};
