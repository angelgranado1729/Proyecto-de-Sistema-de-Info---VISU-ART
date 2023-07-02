import { useEffect, useState } from "react";
import { useTourList } from "../../hooks/useTourList";
import { Loading } from "../../components/Loading/Loading";
import { HOME_URL, RESERVE_URL } from "../../constants/urls";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./TourPage.module.css";
import { ArrowLeft } from "react-bootstrap-icons";
import Subtitle from "../../components/Subtitle/Subtitle";
import { CardInfo } from "../../components/CardInfo/CardInfo";

export function TourPage() {
    const tourName = useParams();
    const navigate = useNavigate();
    const [imagen, setImagen] = useState("");
    const [obraDestacada, setObraDestacada] = useState(null);

    const { listLoading, tourByName, getTourByName } = useTourList();

    useEffect(() => {
        getTourByName(tourName.nombre);
        console.log(tourByName);
    }, [tourName]);

    useEffect(() => {
        if (tourByName?.data.imagen) {
            setImagen(tourByName.data.imagen);
        }
    }, [tourByName]);

    useEffect(() => {
        if (tourByName?.data.obras && imagen) {
            const obraDestacada = tourByName.data.obras.find(
                (obra) => obra.imagen === imagen
            );
            setObraDestacada(obraDestacada);
        }
    }, [tourByName, imagen]);

    const descripcion = tourByName?.data.descripcion || "";
    const palabras = descripcion.split(" ");
    const mitad = Math.ceil(palabras.length / 2);
    const primerParrafo = palabras.slice(0, mitad).join(" ");
    const segundoParrafo = palabras.slice(mitad).join(" ");

    if (listLoading) {
        return <Loading />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.backButton}>
                <Link to={HOME_URL}>
                    <ArrowLeft size={40} color="#000000" />
                </Link>
            </div>

            <div className={styles.title}>
                <h1>{tourByName?.data.nombre}</h1>
            </div>

            <div className={styles.descripcion}>
                <p className={styles.leftParagraph}>{primerParrafo}</p>
                <p className={styles.rightParagraph}>{segundoParrafo}</p>
            </div>

            <div className={styles.reservebt}>
                <div className={styles.reserveButton}>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() => navigate(RESERVE_URL)}
                    >
                        Reservar!
                    </button>
                </div>
            </div>

            <div className={styles.subtitle}>
                <Subtitle subtitle="Obra Destacada" />
            </div>

            <div className={styles.cardContainer}>
                {obraDestacada && (
                    <CardInfo
                        obraTitle={obraDestacada.nombre}
                        obraLocation={obraDestacada.ubicacion}
                        obraAuthor={obraDestacada.autor}
                        obraImage={obraDestacada.imagen}
                        obraYear={obraDestacada.año}
                        obraDimensions={obraDestacada.dimensiones}
                        obraTechnique={obraDestacada.tecnica}
                    />
                )}
            </div>

            <div className={styles.infoContainer}>

                <div className={styles.obras}>
                    <h2 className={styles.subtitle}>Lista de Obras</h2>
                    <ul>
                        {tourByName?.data.obras &&
                            tourByName.data.obras.map((obra) => (
                                <li key={obra.id}>{obra.nombre}</li>
                            ))}
                    </ul>
                </div>

                <div className={styles.autores}>
                    <h2 className={styles.subtitle}>Lista de Autores</h2>
                    <ul>
                        {tourByName?.data.obras && tourByName.data.obras.map((obra) => (
                            <li key={obra.nombre}>{obra.autor}</li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className={styles.reservebt}>
                <div className={styles.reserveButton}>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() => navigate(RESERVE_URL)}
                    >
                        Reservar!
                    </button>
                </div>
            </div>

        </div>
    );
}
