import { Component, createElement, createFactory } from 'react'
import { findDOMNode } from 'react-dom'
import { compose, tap } from 'ramda'

class Input extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.focus) {
      this._input.focus()
    } else {
      this._input.blur()
    }
  }
  render() {
    const { onEnterPress, onKeyPress, autoFocus, focus, ...props } = this.props 
    <input
      ref={i => this._input = i}
      autoFocus={autoFocus || focus}
      onKeyPress={compose(onKeyPress, when(prop('key', 'Enter'), tap(onEnterPress)))}
      {...props} 
    />
  }
}

export default Input
