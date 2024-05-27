import { Component } from 'react';

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
export default Myheader;