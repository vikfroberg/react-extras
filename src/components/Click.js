import React from 'react'
import { findDOMNode } from 'react-dom'

class Click extends React.Component {
  handleDocumentClick(e) {
    if (!findDOMNode(this).contains(e.target)) {
      if (this.props.onClickOutside) {
        this.props.onClickOutside(e)
      }
    } else {
      if (this.props.onClickInside) {
        this.props.onClickInside(e)
      }
    }
  }
  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }
  render() {
    return <div>{this.children}</div>
  }
}

export default Click
