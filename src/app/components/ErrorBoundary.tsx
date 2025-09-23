import { Component, ReactNode } from "react";
// import { useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

type State = {
  hasError: boolean;
  stack: any;
  message: any;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
      stack: null,
      message: null,
    };
  }

  static getDerivedStateFromError(error: { stack: any; message: any }) {
    return { hasError: true, stack: error.stack, message: error.message };
  }

  //   componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
  //     logger(error, 'app crash');
  //   }

  // Иногда полезно уметь «сбрасывать» boundary вручную
  reset = () => this.setState({ hasError: false });

  reloadPage() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1> Ошибка </h1>
          <button onClick={this.reloadPage}>Перезагрузить</button>
          {/* <button>Техническая ин-фа</button> */}
          {/* {this.state.stack} */}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

// interface Props {
//   value: number;
// }

// class ErrorBoundary extends Component {
//   constructor(props: Props) {
//     super(props);

//     this.state = {
//       value: 1,
//     };
//     this.setNewValue = this.setNewValue.bind(this);
//   }

//   componentDidMount(): void {
//     console.log("hi");
//   }

//   componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
//       if (this.state.value !== prevState value) {
//         console.log("hi, value");
//       }
//   }

//   setNewValue() {
//     this.setState({ value: this.state.value + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Привет, {this.state.value}</h1>
//         <button onClick={this.setNewValue}>Нажми меня</button>
//       </div>
//     );
//   }
// }

// const ErrorB = () => {
//   const [value, setValue] = useState(1);
//   const setNewValue = () => {
//     setValue(value + 1);
//   };

//   useEffect(() => {
//     console.log("hi");
//   }, []);

//   useEffect(() => {
//     console.log("hi, value");
//   }, [value]);

//   return (
//     <div>
//       <h1>Привет, {value}</h1>
//       <button onClick={setNewValue}>Нажми меня</button>
//     </div>
//   );
// };

// export default ErrorBoundary;
