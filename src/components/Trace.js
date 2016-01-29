import { Component, createElement, createFactory } from 'react'
import { compose } from 'ramda'

export default (ComposedComponent, key = '') =>
  createFactory(class extends Component {
    componentWillMount() {
      console.log(key, this.props)
    }
    componentWillReceiveProps(nextProps) {
     console.log(key, this.nextProps)
    }
    render() {
      return ComposedComponent(this.props, this.children)
    }
  })
