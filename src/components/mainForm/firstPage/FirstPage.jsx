import css from "./FirstPage.module.css";
import { Formik, Field, Form } from "formik";

import male from "../../../assets/quiz_img/fit-man.png";
import maleSmall from "../../../assets/quiz_img/fit-man-small.png";
import female from "../../../assets/quiz_img/fit-woman.png";
import femaleSmall from "../../../assets/quiz_img/fit-woman-small.png";

export const FirstPage = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.next({ [name]: value });
  };

  return (
    <>
      <p className={css.quiz_info}>1-minute quiz</p>
      <h1 className={css.quiz_title}>Weight Loss Plan</h1>
      <p className={css.first_question}>Choose your gender to get started</p>
      <Formik onSubmit={handleSubmit} initialValues={props.data}>
        <Form autoComplete="off">
          <div className={css.radio_wrpr}>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="gender"
                value="male"
                onClick={handleChange}
              />
              <div className={`${css.img_thmb} ${css.color_secondary_mono_1}`}>
                <picture>
                  <source srcSet={maleSmall} media="(max-width: 767px)" />
                  <source srcSet={male} media="(min-width: 768px)" />
                  <img className={css.img} src={male} alt="male" />
                </picture>
              </div>

              <div className={`${css.styled_btn} ${css.color_brand_mono_1}`}>
                <span className={css.styled_btn_text}>Male</span>
              </div>
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="gender"
                value="female"
                onClick={handleChange}
              />
              <div className={`${css.img_thmb} ${css.color_secondary_main}`}>
                <picture>
                  <source srcSet={femaleSmall} media="(max-width: 767px)" />
                  <source srcSet={female} media="(min-width: 768px)" />
                  <img className={css.img} src={male} alt="female" />
                </picture>{" "}
              </div>
              <div className={`${css.styled_btn} ${css.color_brand_main}`}>
                <span className={css.styled_btn_text}>Female</span>
              </div>
            </label>
          </div>
        </Form>
      </Formik>
    </>
  );
};
