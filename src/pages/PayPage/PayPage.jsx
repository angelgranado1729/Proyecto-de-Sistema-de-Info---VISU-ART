import { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import styles from './PayPage.module.css';

function PayPage() {
  const [amount, setState] = useState(0);

  return (
    <section>
    <div className={styles.container}>
      <h2>Puedes donar la cantidad que consideres</h2>
      <div className={styles.decorationTop}></div>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setState(e.target.value)}
        placeholder="Enter donation amount"
        className={styles.input}
      />
      <div className={styles.paypalButtonContainer}>
        <h1>hola</h1>
        <PayPalButton
          amount={amount}
          options={{
            clientId: "AahTwK0XBqo78fYEB9J4lukg3f8rcCOx0NkFxxwOj2WSNT3GnY20e5Q3T_jnyGPc7zbXE5wn4u41CEd5",
            currency: "USD",
          }}
          onSuccess={(details, data) => {
            alert("Transacción completada por " + details.payer.name.given_name);
          }}
          onError={() => alert('La transferencia falló intenta de nuevo, Si no deseas donar nada puedes dar al botón "Siguiente"')}
          className={styles.paypalButton}
        />
      </div>
      <button className={styles.nextButton}>Siguiente</button>
    </div>
    <div className={styles.decorationBottom}></div>
    </section>
    
  );
}

export default PayPage;