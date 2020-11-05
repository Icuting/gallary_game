import React from 'react'
import {v4} from "uuid";
import {Collapse} from "react-bootstrap";


class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      article : [
        {
          name: 'Могу ли я вернуть деньги?',
          answer: 'нет, деньги вернуть нельзя, они идут на пожертвование бедным в Иваново на ул. Карьерная д. 57',
          author: 'Никита Мокрин',
          active: false,
          id: v4()
        },
        {
          name: 'Могу ли я вернуть деньги?',
          answer: 'нет, деньги вернуть нельзя, они идут на пожертвование бедным в Иваново на ул. Карьерная д. 57',
          author: 'Никита Мокрин',
          active: false,
          id: v4()
        },
        {
          name: 'Могу ли я вернуть деньги?',
          answer: 'нет, деньги вернуть нельзя, они идут на пожертвование бедным в Иваново на ул. Карьерная д. 57',
          author: 'Никита Мокрин',
          active: false,
          id: v4()
        },
        {
          name: 'Могу ли я вернуть деньги?',
          answer: 'нет, деньги вернуть нельзя, они идут на пожертвование бедным в Иваново на ул. Карьерная д. 57',
          author: 'Никита Мокрин',
          active: false,
          id: v4()
        },
      ]
    }
  }

  findQuestion = (id) =>{
    const toggleArticle = this.state.article.map(item=>{
      if(item.id === id){
        return(
          {
            ...item,
            active: !item.active
          }
        )
      }
      else {
        return item
      }
    })
    return toggleArticle
  }

  toggleCollapse = (id) =>{
    this.setState({
      article: this.findQuestion(id)
    })
  }

  render() {
    const { article } = this.state
    return (
      <div>
        <div>
          {article.map((item, index) => {
            return (
              <div className={'faq-collapse-questions'} key={index}>
                <button
                  className={'faq-collapse-questions-button'}
                  onClick={()=>this.toggleCollapse(item.id)}
                  id={item.id}
                  aria-controls="example-collapse-text"
                  aria-expanded={item.active}>
                  {item.name}
                </button>
                <Collapse
                  className={'faq-collapse-questions-collapse'}
                  in={item.active}>
                  <article
                    className={'faq-collapse-questions-content'}
                    id={item.id} >
                    <p className={'faq-collapse-questions-content-answer'}>{item.answer}</p>
                    <p className={'faq-collapse-questions-content-author'}>Вопрос задал: {item.author}</p>
                  </article>
                </Collapse>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default Faq