import { Component, forwardRef, setState } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import ReadArticle from './components/ReadArticle';
import Controls from './components/Controls';
import CreateArticle from './components/CreateArticle';
import UpdateArticle from './components/UpdateArticle';

// 함수형 (최근 추세)
// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

//클래스형
class App extends Component {
  constructor(props){
    super(props);
    this.max_id = 3;
    this.state = {
      mode:'welcome',
      selected_id:2,
      subject:{
        title:'react',
        desc:'Single Page Application'
      },
      welcome:{
        title:'Welcome',
        desc:'Welcome to React'
      },
      menus:[
        {id:1, title:'HTML',desc:'Hypertext markup language'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JS',desc:'JS is for interaction'}
      ]
    };
  }
  getArticles(){ //코드 분리해서 정리 -> refactoring

    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title =this.state.welcome.title;
      _desc =this.state.welcome.desc;
      _article = <ReadArticle title={_title} desc={_desc}/>
    } else if(this.state.mode === 'read'){
      let _data = this.getReadArticle();
      _article = <ReadArticle title={_data.title} desc={_data.desc} onChangeMode={(val)=>{this.setState({mode:val})}}/>
    } else if(this.state.mode === 'create'){
  
      _article = <CreateArticle onSubmit={(_title,_desc)=>{
        
        this.max_id += 1;
        // this.state.menus.push({id:this.max_id, title:_title, desc:_desc}); // 직접 밀어넣기 - 이전값과 이후값을 비교 불가 (원본수정).
        // let _menus = this.state.menus.concat({id:this.max_id, title:_title, desc:_desc}); // 배열과 배열 합치기 이전값과 이후값을 비교 가능 (원본유지).
        // let _menus = Array.from(this.state.menus);
        let _menus = [...this.state.menus];
        _menus.push({id:this.max_id, title:_title, desc:_desc});
        this.setState({
          menus: _menus
        });
      }}/>
    } else if(this.state.mode === 'update'){

      let _data = this.getReadArticle();

      _article = <UpdateArticle data={_data} onSubmit={(_id,_title,_desc)=>{
        console.log(_id,_title,_desc)
        let _menus = Array.from(this.state.menus);
        _menus.forEach((item,index)=>{
          if(item.id === _id){
            _menus[index] = {id:_id, title:_title, desc:_desc}
          }
        });
        this.setState({
          menus: _menus,
          mode:'read'
        });
      }}/>
    }
    return _article;
  }
  getReadArticle(){
    let i = 0;
    while(i<this.state.menus.length){
      let data = this.state.menus[i];
      if(data.id === this.state.selected_id){
        return data;
        break;
      }
      i++;
    }
  }
  render() {
    console.log('App 실행')
    
    return (
      <div className="App">
        {/* props title/ desc */}
        <Myheader title={this.state.subject.title} desc={this.state.subject.desc} onChangePage={(val)=>{
          this.setState({mode:val})
        }}/>
        <Mynav data={this.state.menus} onChangePage={(id)=>{
          console.log(id);
          this.setState({
            mode:'read',
            selected_id:Number(id)
          })
        }}/>
        {this.getArticles()}
        <hr/>
        <Controls mode={this.state.mode} onChangeMode={(val)=>{
          if(val === 'delete'){
            if(window.confirm('정말 삭제할까요?')){
              let _menus = [...this.state.menus];
              _menus.forEach((item,idx)=>{
                if(item.id === this.state.selected_id){
                  _menus.splice(idx,1);
                }
              })
              //let i = 0;
              // while(i<_menus.length){
              //   if(_menus[i].id === this.state.selected_id){
              //     _menus.splice(i,1);
              //     break;
              //   }
              //   i++;
              //}
              this.setState({
                menus:_menus,
                mode:'welcome'
              })
            }
          }
          this.setState({mode:val});
        }}/>
      </div>
    )
  }
}

export default App;