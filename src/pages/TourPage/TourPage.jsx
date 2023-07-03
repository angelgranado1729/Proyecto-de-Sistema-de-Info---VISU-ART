import { useEffect, useState } from "react";
import { useTourList } from "../../hooks/useTourList";
import { Loading } from "../../components/Loading/Loading";
import { HOME_URL, RESERVE_URL } from "../../constants/urls";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./TourPage.module.css";
import { ArrowLeft } from "react-bootstrap-icons";
import Subtitle from "../../components/Subtitle/Subtitle";
import { CardInfo } from "../../components/CardInfo/CardInfo";
import { FaStar } from "react-icons/fa";
import { useFeedback } from "../../hooks/useFeedback";

export function TourPage() {
    const tourName = useParams();
    const navigate = useNavigate();
    const [imagen, setImagen] = useState("");
    const [obraDestacada, setObraDestacada] = useState(null);
    const [rating, setRating] = useState(0);
    const { listLoading, tourByName, getTourByName } = useTourList();
    const { feedbackList, getFeedbackList, listLoadingFeedback } = useFeedback();

    useEffect(() => {
        getTourByName(tourName.nombre);
        getFeedbackList();
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

    useEffect(() => {
        if (!listLoadingFeedback) {
            const tourFeedback = feedbackList?.filter(
                (feedback) => feedback.tour === tourName.nombre
            );
            setRating(calculateRating(tourFeedback));
        }
    }, [feedbackList, listLoadingFeedback, tourName]);

    function calculateRating(feedbackList) {
        if (!feedbackList || feedbackList.length === 0) {
            return 0;
        }

        const totalRating = feedbackList.reduce(
            (sum, feedback) => sum + feedback.rating,
            0
        );
        const averageRating = totalRating / feedbackList.length;
        return Math.round(averageRating);
    }

    const descripcion = tourByName?.data.descripcion || "";
    const palabras = descripcion.split(" ");
    const mitad = Math.ceil(palabras.length / 2);
    const primerParrafo = palabras.slice(0, mitad).join(" ");
    const segundoParrafo = palabras.slice(mitad).join(" ");

    if (listLoading && listLoadingFeedback) {
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

            <div className={styles.rating}>


                <h2 className={styles.subtitle}>Rating:</h2>


                <div className={styles.stars}>
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            size={25}
                            color={index < rating ? "#f27f0c" : "#CCCCCC"}
                        />
                    ))}
                </div>
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
                        {tourByName?.data.obras &&
                            tourByName.data.obras.map((obra) => (
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
