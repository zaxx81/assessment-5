import classes from "./Dialog.module.css";

function Dialog(props) {
  return <div className={classes.dialog}>{props.dialog}</div>;
}

export default Dialog;
