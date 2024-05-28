import { Component } from 'react';

class ReadArticle extends Component {
  render() {
    console.log("마이아티클 샐행");
    return (
      <section>
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </article>

      </section>
    )
  }
}
export default ReadArticle;