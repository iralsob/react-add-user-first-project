import React from "react";
import Card from "./Card";
import Button from "./Button";
import style from './ErrorModal.module.css';

const ErrorModal = props => {
    const closeModalHandler = () => {
        props.onCloseModal();
    }
    return(
        <div>
            <div className={style.backdrop} onClick={closeModalHandler}></div>
            <Card className={style.modal}>
                <header className={style.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={style.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={style.actions}>
                    <Button  onClick={closeModalHandler}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;