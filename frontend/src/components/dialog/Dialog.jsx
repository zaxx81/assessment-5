import classes from "./Dialog.module.css";
import Button from "../../../node_modules/react-bootstrap/Button";

function Dialog({ dialog, setShowMapView, monsters }) {
  // console.log(monsters);
  return (
    <>
      <div>
        {/* <div>{monsters[0]["image"]}</div> */}
        {/* <i className="ra ra-bear-trap ra-5x"></i> */}
      </div>
      <div className={classes.dialog}>{dialog}</div>
      <br />
      <Button onClick={() => setShowMapView(true)}>Done</Button>
    </>
  );
}

export default Dialog;
