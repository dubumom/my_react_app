import { Component } from 'react';

class CreateArticle extends Component {
  render() {
    console.log("크리에이트아티클 샐행");
    return (
      <section>
        <article>
          <h2>Create Article</h2>
          <form method="post" onSubmit={(e)=>{
            e.preventDefault();
            //debugger; // 이전까지만 실행하고 그 이후는 멈춤
            this.props.onSubmit(e.target.title.value, e.target.desc.value, e.target.level.value);
          }}>
            <p>
              <input type="text" name="title" placeholder="title"/>
            </p>
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <input type="number" min="4" name="level" placeholder="level"/>
            </p>
            <button type="submit">입력</button>
          </form>
        </article>
      </section>
    )
  }
}
export default CreateArticle;