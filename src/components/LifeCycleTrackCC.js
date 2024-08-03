import React from "react";

class LifeCycleTrackCC extends React.Component {
  constructor(props) {
    // called when component is created
    console.log("--- constructor");
    super(props);
    this.state = {
      points: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("--- shouldComponentUpdate");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);

    // returns
    // 1. true if rendering is needed
    // 2. false if rendering is not needed
    return nextState.points % 2 === 0;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("--- componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
  }

  componentDidMount() {
    // called once when component is mounted to the DOM
    console.log("--- componentDidMount");
  }

  componentWillUnmount() {
    console.log("--- componentWillUnmount");
    // - clearing up timers
    // - cancelling network requests
    // - cleaning up subscriptions
  }

  handleAdd = () => {
    this.setState((state) => ({
      points: state.points + 1
    }));
  };

  render() {
    console.log("--- render");

    const { points } = this.state;
    console.log("points", points);

    return (
      <>
        <p>Points: {points}</p>
        <button onClick={this.handleAdd}>ADD</button>
      </>
    );
  }
}

export default LifeCycleTrackCC;
