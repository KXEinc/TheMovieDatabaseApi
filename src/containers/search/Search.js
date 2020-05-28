import React from "react";
import { connect } from "react-redux";
import SearchDrawer from "../../components/SearchDrawer/SearchDrawer";
import { fetchSearch, getMovie } from '../../redux/actions/fetchActions'
import { clearSearchList } from '../../redux/actions/displayActions'



const Search = ({clearSearchList, searchResults, startFetchSearch, value, allowInput, getMovie }) => {
  return <SearchDrawer inputHandler={startFetchSearch}
                       inputValue={value}
                       searchResults={searchResults}
                       clearSearchList={clearSearchList}
                       allowInput={allowInput}
                       getMovie={getMovie}

  />;
};

const mapStateToProps = (state) => {
  return {
    value: state.display.searchInputValue,
    searchResults: state.display.results,
    allowInput: state.ui.allowInput

  }
};

const mapDispatchToProps = dispatch => {
  return {
    startFetchSearch: (value, path) => dispatch(fetchSearch(value, path)),
    clearSearchList: result => dispatch(clearSearchList(result)),
    getMovie: id => dispatch(getMovie(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
