import React, { useContext, useEffect } from 'react'
import styles from './ReservePage.module.css'
import FormItem from '../../components/FormItem/FormItem'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu'
import { TourContext, useTour } from '../../contexts/TourContext'
import { useTourList } from '../../hooks/useTourList'
import DropdownTour from '../../components/DropdownTour/DropdownTour'
import DropdownDates from '../../components/DropdownDates/DropdownDates'
import { useUserContext } from '../../contexts/UserContext'
import { createReserve } from '../../firebase/reservaciones'
import { Navigate, useNavigate } from 'react-router-dom'
import { HOME_URL } from '../../constants/urls'

function ReservePage() {
  const { tourList, listLoading, getTourList } = useTourList();
  const { tour, tourId, changeId, changeTour, resetTour} = useContext(TourContext);
  const {user} = useUserContext();
  const navigate = useNavigate();

    useEffect( () => {
        //Fetch de lista de tours
        getTourList();
    }, [])

/***
 * La pagina de reservas es una vista privada que requiere de una sesion activa para acceder
 * toma los datos de tour e id del context, que deberian iniciar como null y vacio inicialmente,
 * tambien realiza una llamada al hook del listado de tours para adquirir la lista de tours necesaria
 * para renderizar la version de Dropdown menu para tours, si se encuentra cargando, se mostrara 
 * un texto que indica el estado, si no, renderiza el componente de DropdownTour y DropdownDates, donde habra un listado
 * con los tours actuales en la coleccion, una vez el usuario seleccione un tour, DropdownDates se actualizara con las
 * fechas que tiene dicho tour, al salir de la pagina se debera reiniciar el context de tours (reserva) a menos que 
 * la vista sea el siguiente paso de la reserva. El usuario no debe poder ir al siguiente paso si no ha seleccionado una fecha.
 */

function finishReserve(){
    const reserveItem = {
        fecha: tour.chosenFecha,
        tour_id: tourId.id,
        user_id: user.id 
    }
    createReserve(reserveItem, user)
}

function reserveCheck(){
    if (tour) {

        if (tour.chosenFecha) {
            finishReserve();
            resetTour();
            navigate(HOME_URL);
        } else {
            alert('Por favor seleccione una fecha antes de continuar')
        }

    } else{
        alert('Por favor seleccione un tour antes de continuar')
    }
}

  return (
    <div className="App">
        <header className="back-header">
            <i className="fa-solid fa-arrow-left"></i>
        </header>

    <div className={styles.centeredArea}>
        <Subtitle subtitle = "Reservar tu Tour"/>
        <p className={styles.reserveSubSubtitle}>Terminos y condiciones de la reservacion bla bla hola</p>
        
        <section className={styles.rForm}>
            <div className={styles.inpArea}>
                {listLoading &&(<h1>Cargando...</h1>)}

                {!listLoading && tourList &&(
                    <>
                        <DropdownTour tours = {tourList}/>
                        <DropdownDates/>
                    </>
                )}

            </div>

            <div className={styles.textArea}>
                <p> Aqui podrás explorar y disfrutar de las obras de arte que residen en nuestra institución. Nuestra misión es promover el arte y la cultura en nuestra comunidad, y para ello ofrecemos una variedad de tours que te permitirán conocer y apreciar nuestras colecciones de manera única e inspiradora. Únete a nosotros en esta experiencia cultural y descubre el valor y la belleza del arte en nuestro campus universitario</p>
            </div>
        </section>
    </div>

        <section className={styles.buttonArea}>
            <button className={styles.bluebtn}>Ver Calendario</button>
            <button className={styles.bluebtn}>Ver otros tours</button>
            <button className={styles.orangebtn} onClick={() => {reserveCheck()}}>Siguiente</button>
        </section>

    </div>

  )
}

export default ReservePage
































/*Creo que deberia buscar mejores nombres para las variables*/