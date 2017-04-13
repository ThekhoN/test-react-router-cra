import React from 'react';
import { connect } from 'react-redux';

let Link = ({children, filter, current_visibilityFilter, handle_toggleVisibilityFilter}) => {
  if(filter === current_visibilityFilter){
    return (<span>{children}</span>
    )
  }
  else {
    return (<a
            filter={filter}
            onClick={()=>{handle_toggleVisibilityFilter(filter)}}
            href='#'>
      {children}
    </a>)
  }
}
const mapStateToProps = (state) => {
  return {
    current_visibilityFilter: state.visibilityFilter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handle_toggleVisibilityFilter:(filter)=>{
      dispatch({
        type:'SET_VISIBILITY_FILTER',
        filter
      })
    }
  }
}

Link = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default Link;
