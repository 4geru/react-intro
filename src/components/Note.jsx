import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  title:   state.note.title,
  content: state.note.content,
})

const dispathStateToProps = dispatch => ({
  updateTitlte     : (title) => dispatch({type: 'NOTE.UPDATE.TITLE', payload: {title} }),
  updateContent    : (content) => dispatch({type: 'NOTE.UPDATE.CONTENT', payload: {content} }),
})

@connect(mapStateToProps, dispathStateToProps)
export default class Counter extends React.Component{
  render() {

    const {
      title,
      content,
      updateTitlte,
      updateContent
    } = this.props

    return (
      <main>
        <h2>{'Notepad'}</h2>
        Title : 
        <input type="text" value={title} onChange={ (e) => updateTitlte(e.target.value) } />
        Content : 
        <input type="text" value={content} onChange={ (e) => updateContent(e.target.value) } />
        <p>{title}</p>
        <p>{content}</p>
      </main>
    )
  }
}