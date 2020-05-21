import React from 'react'
import { connect } from 'react-redux'
import { showSelectedMovie } from '../../redux/actions/actions'

const Cart = props => (
  <div onClick={() => props.ShowSelectedMovie(props.el)} className={'card__item card__item_m10'}>
    {props.children}
  </div>
);
const mapDispatchToProps = reducer => {
  return {
    ShowSelectedMovie: el => reducer(showSelectedMovie(el))
  }
}

export default connect(null,mapDispatchToProps)(Cart)
