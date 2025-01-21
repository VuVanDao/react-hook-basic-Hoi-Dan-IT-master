// import logo from "./logo.svg";
import "./App.css";
// import { connect } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./action/actions";
// import { useSelector, useDispatch } from "react-redux";
import Home from "./component/Home";
const App = (props) => {
  // let { count, increaseCounter, decreaseCounter } = props;
  // const counter = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();
  // const handleIncreaseCount = () => {
  //   dispatch(increaseCounter());
  // };

  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello world with React and Hoi Dan IT!</h1>
          <h1>Count:{counter}</h1>
          <button onClick={() => handleIncreaseCount()}>
            Increase Counter
          </button>
          <button onClick={() => dispatch(decreaseCounter())}>
            Decrease Counter
          </button>
        </header>
      </div> */}
      <Home />
    </>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
