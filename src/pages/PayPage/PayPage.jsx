import { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import styles from "./PayPage.module.css";
import { ArrowLeft } from "react-bootstrap-icons";
import { HOME_URL, RESERVE_LOOK_URL } from "../../constants/urls";
import { Link, useNavigate } from "react-router-dom";

function PayPage() {
  const navigate = useNavigate()
  const [amount, setState] = useState("0.00");

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    const regex = /^\d+(\.\d{0,2})?$/;
    if (regex.test(inputAmount)) {
      setState(inputAmount);
    }
  };
  return (
    <div className={styles.App}>
      <section>
        <div className={styles.backButton}>
          <Link to={HOME_URL}>
            <ArrowLeft size={40} color="#000000" />
          </Link>
        </div>
        <div className={styles.container}>
          <h2>Puedes donar la cantidad que consideres 👀</h2>
          <div className={styles.decorationTop}></div>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter donation amount"
            className={styles.input}
          />
          <div className={styles.paypalButtonContainer}>
            <h1>Paga aqui  👇</h1>
            <PayPalButton
              amount={amount}
              options={{
                clientId:
                  "AahTwK0XBqo78fYEB9J4lukg3f8rcCOx0NkFxxwOj2WSNT3GnY20e5Q3T_jnyGPc7zbXE5wn4u41CEd5",
                currency: "USD",
              }}
              onSuccess={(details, data) => {
                alert(
                  "Transacción completada por " + details.payer.name.given_name
                );
              }}
              onError={() =>
                alert(
                  'La transferencia falló intenta de nuevo, Si no deseas donar nada puedes dar al botón "Siguiente"'
                )
              }
              className={styles.paypalButton}
            />
          </div>
          <button className={styles.nextButton}
            onClick={() => (navigate(RESERVE_LOOK_URL))}
          >Siguiente</button>
        </div>
        <div className={styles.decorationBottom}></div>
      </section>
    </div>
  );
}

export default PayPage;
