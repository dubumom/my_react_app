import { Component } from 'react';

class UpdateArticle extends Component {
  render() {
    console.log("업데이트아티클 샐행");
    return (
      <section>
        <article>
          <h2>Update Article</h2>
          <form method="post" onSubmit={(e)=>{
            e.preventDefault();
            //debugger; // 이전까지만 실행하고 그 이후는 멈춤
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }}>
            <p>
              <input type="text" name="title" placeholder="title" value={this.props.data.title}/>
            </p>
            <p>
              <textarea name="desc" placeholder="description">{this.props.data.desc}</textarea>
            </p>
            <button type="submit">입력</button>
          </form>
        </article>
      </section>
    )
  }
}
export default UpdateArticle;