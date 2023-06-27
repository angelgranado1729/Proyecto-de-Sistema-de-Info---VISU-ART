import { useEffect } from "react";
import { Toast } from "bootstrap";

export function CustomToast({ typeToast, title, message, time }) {
    useEffect(() => {
        const toastElement = document.querySelector("#customToast");
        const toast = new Toast(toastElement, {
            position: "top",
            top: "50%",
            translate: "-50%",
            delay: time,
        });
        toast.show();
    }, []);

    if (typeToast === "error") {
        return (
            <div
                className="position-fixed top-0 start-50 translate-middle-x p-3"
                style={{ zIndex: 9999 }}
            >
                <div
                    id="customToast"
                    className="toast align-items-center text-white bg-danger border-0"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="d-flex">
                        <span className="bi bi-x-circle-fill text-white me-2" />
                        <div className="toast-body"
                            style={{
                                width: "100%",
                                height: "6rem",
                            }}>
                            <div className="d-flex justify-content-between">
                                <strong className="mb-0"
                                    style={{
                                        fontSize: "0.9rem",
                                        padding: "0.2rem 0.7rem",
                                    }}>
                                    {title}
                                </strong>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white me-2"
                                    data-bs-dismiss="toast"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    padding: "0.2rem 0.7rem",
                                    paddingBottom: "0.4rem",
                                }}
                            >
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (typeToast === "success") {
        return (
            <div
                className="position-fixed top-0 start-50 translate-middle-x p-3"
                style={{ zIndex: 9999 }}
            >
                <div
                    id="customToast"
                    className="toast align-items-center text-white bg-success border-0"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="d-flex">
                        <span className="bi bi-check-circle-fill text-white me-2" />
                        <div className="toast-body"
                            style={{
                                width: "100%",
                                height: "6rem",
                            }}
                        >
                            <div className="d-flex justify-content-between">
                                <strong className="mb-0"
                                    style={{
                                        fontSize: "0.9rem",
                                        padding: "0.2rem 0.7rem",
                                    }}>
                                    {title}
                                </strong>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white me-2"
                                    data-bs-dismiss="toast"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    padding: "0.2rem 0.7rem",
                                    paddingBottom: "0.4rem",
                                }}
                            >
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    return null;
}

