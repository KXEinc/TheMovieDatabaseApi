import React from 'react'
import { connect } from 'react-redux'
import Carousel from '../../components/Carousel/Carousel'

const Recommendations = ({recommendations}) => {
  console.log(recommendations)
  return (
    <Carousel results={{recommendations}}/> //TODO add check for recommendations
  )
}

const mapStateToProps = state => {
  return { recommendations: state.display.recommendations.recommendations}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommendations)