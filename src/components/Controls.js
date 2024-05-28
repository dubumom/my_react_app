import { Component, useLayoutEffect } from 'react';

class Controls extends Component {
  render() {
    console.log("컨트롤 샐행");
    return (
      <ul className="controls">
        {
          (this.props.mode === 'read') ?
        <>
          <li><a href="" onClick={(e)=>{
              e.preventDefault();
              this.props.onChangeMode('update');
            }}>update</a>
          </li>
          <li>
            <a href="" onClick={(e)=>{
                e.preventDefault();
                this.props.onChangeMode('delete');
              }}>delete</a>
          </li>
        </>:
          <li><button onClick={(e)=>{
            e.preventDefault();
            this.props.onChangeMode('create');
          }}>Create</button></li>
        }
      </ul>
    )
  }
}
export default Controls;