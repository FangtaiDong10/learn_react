import "./Card.css";

function Card(props) {
  // combine the classes from the Card.css file with the classes passed in from the parent component
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
