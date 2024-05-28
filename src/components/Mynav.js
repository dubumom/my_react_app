import { Component } from 'react';

class Mynav extends Component {
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