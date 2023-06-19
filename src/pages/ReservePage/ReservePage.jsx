import React from 'react'
import styles from './ReservePage.css'
import FormItem from '../../components/FormItem/FormItem'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu'

function ReservePage() {
  return (
    <div className="App">
        <header className="back-header">
            <i class="fa-solid fa-arrow-left"></i>
        </header>

    <div className='centeredArea'>
        <Subtitle subtitle = "Reservar tu Tour"/>
        <p className='reserveSubSubtitle'>Terminos y condiciones de la reservacion bla bla hola</p>
        
        <section className='rForm'>
            <div className='inpArea'>
                    <DropdownMenu/>
                <DropdownMenu/>
            </div>

            <div className='textArea'>
                <p> Aqui podrás explorar y disfrutar de las obras de arte que residen en nuestra institución. Nuestra misión es promover el arte y la cultura en nuestra comunidad, y para ello ofrecemos una variedad de tours que te permitirán conocer y apreciar nuestras colecciones de manera única e inspiradora. Únete a nosotros en esta experiencia cultural y descubre el valor y la belleza del arte en nuestro campus universitario</p>
            </div>
        </section>
    </div>

        <section className='buttonArea'>
            <button className='blue-btn'>Ver Calendario</button>
            <button className='blue-btn'>Ver otros tours</button>
            <button className='orange-btn'>Siguiente</button>
        </section>

    </div>

  )
}

export default ReservePage