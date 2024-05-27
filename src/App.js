import { Component } from 'react';
import './App.css';

// 최근에 함수형으로 바뀌고 있는 추세
/*
function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}
*/

// class App extends Component{
//   render(){
//     return(
//           <div className="App">
//       Hello World
//     </div>
//     )
//   }
// }
class Myheader extends Component {
  render() {
    console.log(this);
    return (
      // 가상의 부모라도 부모박스가 있어야함 <></>
      <header>
        <h1 className="logo">{this.props.title}</h1>
        <p>{this.props.desc}</p>
    </header>
    )
  }
}
class Myarticle extends Component {
  render() {
    return (
      <section>
        <article>
          <h2>HTML</h2>
          <p>Hypertext markup Language</p>
        </article>
      </section>
    )
  }
}
class Mynav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="">HTML</a></li>
          <li><a href="">CSS</a></li>
          <li><a href="">JavaScript 입니당</a></li>
        </ul>
      </nav>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Myheader title="React" desc="Single Page Application"/>
      <Mynav/>
      <Myarticle/>
    </div>
    )
  }
}

export default App;
