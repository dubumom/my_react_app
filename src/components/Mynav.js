import { Component } from 'react';

class Mynav extends Component {
  shouldComponentUpdate(nextProps, nextState){ // true 기본값 변화가 있을 때만 작동
    //console.log('shouldComponentUpdate',this.props.data, nextProps.data);
    if(this.props.data === nextProps.data){
      return false;
    }
    return true;
  }
  render() {
    console.log("마이네브 샐행");
    let list = [];
    let data = this.props.data;
    let i = 0;
    while(i<data.length){
      list.push(<li key={data[i].id}>
        <a href="" data-id={data[i].id} onClick={(e)=>{
          e.preventDefault();
          this.props.onChangePage(e.target.getAttribute('data-id'));
        }}>
      {data[i].title}
      </a>
    </li>);
      i++;
    }
    return (
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    )
  }
}
export default Mynav;