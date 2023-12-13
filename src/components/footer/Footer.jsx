import css from "./Footer.module.css";
import mastercard_logo from "../../assets/mastercard.svg";
import paypal_logo from "../../assets/paypal.svg";
import visa_logo from "../../assets/visa.svg";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <a
        className={`${css.footer_text} ${css.footer_address}`}
        href="https://maps.app.goo.gl/9ZivUXEwHMK9ns7S6"
        target="blanc"
      >
        <span className={css.footer_address_upper}>
          Netpeak eood, 47 cherni vruh
        </span>{" "}
        Blvd, fl. 5 Lozenets, Sofia, Bulgaria
      </a>
      <div className={css.footer_wrpr}>
        <a
          className={`${css.footer_text} ${css.footer_email}`}
          href="mailto:support@food-mentor.com"
        >
          support@food-mentor.com
        </a>
        <div className={css.footer_cards_wrpr}>
          <img
            className={css.footer_cards}
            src={visa_logo}
            alt="visa"
            width={36}
          />
          <img
            className={css.footer_cards}
            src={mastercard_logo}
            alt="mastercard"
            width={36}
          />
          <img
            className={css.footer_cards}
            src={paypal_logo}
            alt="paypal"
            width={36}
          />
        </div>
      </div>
    </footer>
  );
};
