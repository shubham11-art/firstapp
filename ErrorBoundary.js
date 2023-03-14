import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // created state variable
    this.state = { hasError: false };
  }
  // componentDidCatch catches the error. Fir us error se setState ko true karenge

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  // render me hum conditional rendering karte hai. This we see on screen.
  render() {
    if (this.state.Error) {
      return <h1>Some error Occured</h1>;
    }
    // children prop jo apane under likhe huye component ko render karta hai
    return this.props.childern;
  }
}

export default ErrorBoundary;
