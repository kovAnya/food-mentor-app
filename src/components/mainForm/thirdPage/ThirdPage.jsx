import css from "./ThirdPage.module.css";
import { Formik, Field, Form } from "formik";
import { BackButton } from "../backButton/BackButton";

import bodyTypeRegular from "../../../assets/quiz_img/body-type-1.png";
import bodyTypePlumb from "../../../assets/quiz_img/body-type-2.png";
import bodyTypeExtra from "../../../assets/quiz_img/body-type-3.png";

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
      <h1 className={css.quiz_title}>Choose your current body type</h1>
      <Formik onSubmit={handleSubmit} initialValues={props.data}>
        <Form autoComplete="off">
          <div>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="body_type"
                value="Regular"
                onClick={handleChange}
              />
              <span>Regular</span>
              <div className={`${css.img_thmb} ${css.color_secondary_main}`}>
                <img className={css.img} src={bodyTypeRegular} alt="Regular" />
              </div>
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="body_type"
                value="Plumb"
                onClick={handleChange}
              />
              <span>Plumb</span>
              <div className={`${css.img_thmb} ${css.color_secondary_mono_1}`}>
                <img className={css.img} src={bodyTypePlumb} alt="Plumb" />
              </div>
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="body_type"
                value="Extra Plumb"
                onClick={handleChange}
              />
              <span>Extra Plumb</span>
              <div className={`${css.img_thmb} ${css.color_secondary_mono_3}`}>
                <img className={css.img} src={bodyTypeExtra} alt="Extra" />
              </div>
            </label>
          </div>
          <BackButton handlePrev={props.prev} />
        </Form>
      </Formik>
    </div>
  );
};
