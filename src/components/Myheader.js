import { Component } from 'react';

class Myheader extends Component {
  render() {
    console.log("마이 헤더 실행");
    return (
      // 가상의 부모라도 부모박스가 있어야함 <></>
      <header>
        <h1 className="logo">            
          <a href="" onClick={(e)=>{
            e.preventDefault();
            this.props.onChangePage('welcome');
          }}>{this.props.title}</a>
        </h1>
        <p>{this.props.desc}</p>
      </header>
    )
  }
}
export default Myheader;