import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "./action/actions";
const App = (props) => {
  let { count, increaseCounter, decreaseCounter } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and Hoi Dan IT!</h1>
        <h1>Count:{count}</h1>
        <button onClick={() => increaseCounter()}>Increase Counter</button>
        <button onClick={() => decreaseCounter()}>Decrease Counter</button>
      </header>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
