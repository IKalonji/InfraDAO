import React from 'react'
import { Toast } from 'primereact/toast';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
      this.toast = React.createRef()
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    show = () => {
      this.toast.current.show({ severity: 'warn', summary: 'Error', detail: 'There seem to have been an error please head back to home and reload' });
  };
  
  componentDidCatch(error, errorInfo) {
    // You can log the error or send it to an error tracking service
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }
  
    render() {
      if (this.state.hasError === true) {
        this.show();
        window.location.href = '/';
        return (
          <div>
            <Toast ref={this.toast} />
          </div>
        );
      }
  
      return this.props.children;
    }
  }
  