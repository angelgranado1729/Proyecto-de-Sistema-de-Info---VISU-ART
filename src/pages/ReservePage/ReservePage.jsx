import React, { useContext, useEffect, useState } from 'react'
import styles from './ReservePage.module.css'
import Subtitle from '../../components/Subtitle/Subtitle'
import { TourContext, useTour } from '../../contexts/TourContext'
import { useTourList } from '../../hooks/useTourList'
import DropdownTour from '../../components/DropdownTour/DropdownTour'
import DropdownDates from '../../components/DropdownDates/DropdownDates'
import { useUserContext } from '../../contexts/UserContext'
import { createReserve } from '../../firebase/reservaciones'
import { Link, useNavigate } from 'react-router-dom'
import { CALENDAR_URL, HOME_URL, PAY_PAGE_URL } from '../../constants/urls'
import { CustomToast } from '../../components/CustomToast/CustomToast'
import { ArrowLeft } from 'react-bootstrap-icons'

function ReservePage() {
  const { tourList, listLoading, getTourList } = useTourList();
  const { tour, tourId, changeId, changeTour, resetTour} = useContext(TourContext);
  const {user} = useUserContext();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [dateEmpty, setDateEmpty] = useState(false);
  const [tourEmpty, setTourEmpty] = useState(false);
  const [duplicateReserve, setDuplicateReserve] = useState(false);

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

function finishReserve(reserveItem){
    createReserve(reserveItem, user)
}

function reserveCheck(){
    if (tour) {

        if (tour.chosenFecha) {
            const reserveItem = {
                fecha: tour.chosenFecha,
                tour_id: tourId.id,
                user_id: user.id 
            }

            let alredyReserved = false;
            user.reservations.forEach(item => {if (reserveItem.tour_id == item.tour_id && reserveItem.fecha == item.fecha){
                alredyReserved = true;
            }})

            if (alredyReserved) {
                setShowToast(true);
                setTourEmpty(false);
                setDateEmpty(false);
                setDuplicateReserve(true)
            }

            else{
                finishReserve(reserveItem);
                resetTour();
                navigate(PAY_PAGE_URL);
            }


        } else {
            setShowToast(true);
            setTourEmpty(false);
            setDateEmpty(true);
        }

    } else{
        setShowToast(true);
        setTourEmpty(true);
        setDateEmpty(false);
    }
}

  return (
    <div className="App">
        <div className={styles.backbutton}>
            <Link to={HOME_URL}>
                <ArrowLeft size={40} color="#000000" />
            </Link>
        </div>

    <div className={styles.centeredArea}>
        <Subtitle subtitle = "Reservar tu Tour"/>
        <p className={styles.reserveSubSubtitle}>Explora el mundo con nuestra reserva de tour. Descubre lugares asombrosos, disfruta de experiencias únicas y crea recuerdos inolvidables. ¡Reserva ahora!</p>
        
        <section className={styles.rForm}>
            <div className={styles.inpArea}>
                {listLoading &&(<h1>Cargando...</h1>)}

                {!listLoading && tourList &&(
                    <>
                        <DropdownTour tours = {tourList}/>
                        <DropdownDates/>

                        {showToast && tourEmpty &&(
                            <CustomToast
                            typeToast="error"
                            title="¡Error!"
                            message="Para seguir, debe seleccionar un tour y una fecha"
                            time={5000}
                            />
                        )}

                        {showToast && dateEmpty &&(
                            <CustomToast
                            typeToast="error"
                            title="¡Error!"
                            message="Para seguir, debe seleccionar una fecha"
                            time={5000}
                            />
                        )}

                        {showToast && duplicateReserve &&(
                            <CustomToast
                            typeToast="error"
                            title="¡Error!"
                            message="Ya se ha realizado una reserva para este tour en la fecha ingresada"
                            time={5000}
                            />
                        )}
                        
                    </>
                )}

            </div>

            <div className={styles.textArea}>
                <p> Aqui podrás explorar y disfrutar de las obras de arte que residen en nuestra institución. Nuestra misión es promover el arte y la cultura en nuestra comunidad, y para ello ofrecemos una variedad de tours que te permitirán conocer y apreciar nuestras colecciones de manera única e inspiradora. Únete a nosotros en esta experiencia cultural y descubre el valor y la belleza del arte en nuestro campus universitario</p>
            </div>
        </section>
    </div>

        <section className={styles.buttonArea}>
            <button className={styles.bluebtn} onClick={() => navigate(CALENDAR_URL)}>Ver Calendario</button>
            <button className={styles.bluebtn} onClick={() => navigate(HOME_URL)}>Ver tours</button>
            <button className={styles.orangebtn} onClick={() => {reserveCheck()}}>Siguiente</button>
        </section>

        <div className={styles.reservedecoration1}></div>
        <div className={styles.reservedecoration2}></div>
        <div className={styles.reservedecoration3}></div>

    </div>

  )
}

export default ReservePage
































/*Creo que deberia buscar mejores nombres para las variables*/