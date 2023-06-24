// import  { useContext, useEffect } from 'react'
// import styles from './PayPage.module.css'
// //import FormItem from '../../components/FormItem/FormItem'
// //import Title from '../../components/Title/Title'
// import Subtitle from '../../components/Subtitle/Subtitle'
// //import DropdownMenu from '../../components/DropdownMenu/DropdownMenu'
// import { TourContext, useTour } from '../../contexts/TourContext'
// import { useTourList } from '../../hooks/useTourList'
// //import DropdownTour from '../../components/DropdownTour/DropdownTour'
// //import DropdownDates from '../../components/DropdownDates/DropdownDates'
// import { PayPalButton } from "react-paypal-button-v2"; // Importa el botón de PayPal

// function PayPage() {
//     const { tourList, listLoading, getTourList } = useTourList();
//     const { tour, tourId, changeId, changeTour, resetTour} = useContext(TourContext);

//     useEffect( () => {
//     //Fetch de lista de tours
//     getTourList();
//     }, [])

//     return (
//     <div className="App">
//         <header className="back-header">
//         <i className="fa-solid fa-arrow-left"></i>
//         </header>

//         <div className={styles.centeredArea}>
//         <Subtitle subtitle = "Reservar tu Tour"/>
//         <p className={styles.reserveSubSubtitle}>Terminos y condiciones de la reservacion bla bla hola</p>
        
//         <section className={styles.rForm}>
//             <button className={styles.bluebtn}>Ver Calendario</button>
//             <button className={styles.bluebtn}>Ver otros tours</button>
//             <PayPalButton
//             amount="0.01" // Aquí puedes poner el monto a pagar
//             // El ID del cliente de PayPal se obtiene de tu cuenta de PayPal
//             options={{
//                 clientId: "YOUR_CLIENT_ID"
//             }}
//             onSuccess={(details, data) => {
//                 alert("Transaction completed by " + details.payer.name.given_name);
//             }}
//             />
//             <button className={styles.orangebtn}>Siguiente</button>
//         </section>

//         </div>

//     </div>
//     )
// }

// export default PayPage

import { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import './PayPage.css';

function PayPage() {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setAmount(0);
    } else {
      setAmount(value);
    }
  };

  return (
    <div className="container">
      <h2>Puedes donar la cantidad que consideres</h2>
      <input 
        type="number" 
        value={amount} 
        onChange={handleAmountChange} 
        placeholder="Enter donation amount"
      />
      <div className="paypal-button-container">
        <PayPalButton
          amount={amount}
          // Replace "YOUR_CLIENT_ID" with your actual client ID
          options={{
            clientId: "Aa7gc7m_V_etm5Hx5mEea3twoTcD6QAWjLLf-uM5ZHTNLmPaiDeV4YgYCoWW9obxYPL3CHukT3bKbh2s"
          }}
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);
          }}
        />
      </div>
    </div>
  );
}

export default PayPage;