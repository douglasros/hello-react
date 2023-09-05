import './square.css';

// for very simple components that don't retain their own state
export function Square(props) {
    return (
      <button className="square"
      onClick={props.onClick} >
        {props.value}
      </button>
    );
}