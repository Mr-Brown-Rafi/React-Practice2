import React from "react";
import Card from "./Card";
import Button from "./Button";
import Style from "./ErrorModel.module.css";

const ErrorModel = (props) => {
  return (
      <>
      <div className={Style.backdrop} onClick={props.onConfirm}></div>
    <Card className={Style.modal}>
      <header className={Style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={Style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={Style.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
    </>
  );
};
export default ErrorModel;
