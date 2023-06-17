import React from 'react'
import styles from './ReservePage.css'
import FormItem from '../../components/FormItem/FormItem'

function ReservePage() {
  return (
    <div>
        <div>
            <p>Flecha</p>
        </div>
            <div>
            <div className='rTitle'>
                <h1>Reservar Tour</h1>
                <p>Terminos y condiciones de la reserva</p>
            </div>

            <section className='rForm'>
                <div className='inpArea'>
                    <FormItem labelFor={"tName"} labelName={"tourName"} labelDesc={"Nombre de Tour"} labelClass={"fTour"} formType={"text"}/>
                    <FormItem labelFor={"tDate"} labelName={"tourDate"} labelDesc={"Fecha de Tour"} labelClass={"fTour"} formType={"week"}/>
                </div>

                <div className='textArea'>
                    <p> Aqui podrás explorar y disfrutar de las obras de arte que residen en nuestra institución. Nuestra misión es promover el arte y la cultura en nuestra comunidad, y para ello ofrecemos una variedad de tours que te permitirán conocer y apreciar nuestras colecciones de manera única e inspiradora. Únete a nosotros en esta experiencia cultural y descubre el valor y la belleza del arte en nuestro campus universitario</p>
                </div>
            </section>

            <section className='buttonArea'>
                <button className='calendarB'>Ver Calendario</button>
                <button className='otherB'>Ver otros tours</button>
                <button className='nextB'>Siguiente</button>
            </section>

        </div>
    </div>
  )
}

export default ReservePage