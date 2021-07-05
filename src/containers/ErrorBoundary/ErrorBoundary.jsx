import React from "react";
import ErrorComponent from "../../components/shared/ErrorComponent/ErrorComponent";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Updating state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      //custom fallback UI
      return <ErrorComponent message={"Something went wrong!"} />;
    }

    return this.props.children;
  }
}
