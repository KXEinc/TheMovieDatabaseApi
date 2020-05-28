import React from 'react'
import { connect } from 'react-redux'
import Carousel from '../../components/Carousel/Carousel'

const Similar = ({similar}) => {
  return (
    <Carousel results={similar}/>
  )
}

const mapStateToProps = state => {
  return { similar: state.display.similar}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Similar)