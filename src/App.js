import { Component } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Myarticle from './components/Myarticle';
import Mynav from './components/Mynav';

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

class App extends Component {
  constructor(props){
    super(props); //부모컴포넌트에서 만든 값을 쓰고 싶을 때 super();
    this.state = {
      subject:{
        title : 'react',
        desc : 'Single Page Application'
      },
      menus: [
        {id:1, title:'HTML', desc : 'Hypertext markup Language'},
        {id:2, title:'CSS', desc : 'CSS id for design'},
        {id:3, title:'javeScript', desc : 'javeScript is for interaction'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
      <Myheader title={this.state.subject.title} desc={this.state.subject.desc}/>
      <Mynav data={this.state.menus}/>
      <Myarticle title="HTML" desc="Hypertext markup Language"/>
    </div>
    )
  }
}

export default App;
