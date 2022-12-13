import React, { Component } from "react";
import "./SearchBox.css";
import { addMovies } from "../../redux/action";
import { connect } from "react-redux";

class SearchBox extends Component {
  state = {
    searchLine: "",
  };
  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
  };
  searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    let searchText = this.state.searchLine;
    const key = "f2649dc1";
    fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=${key}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search);
        this.props.dispatch(addMovies(data.Search));
      })
      .catch((error) => {
        alert("Movie not found");
      });
  };
  render() {
    const { searchLine } = this.state;

    return (
      <div className="search-box">
        <form
          className="search-box__form"
          onSubmit={this.searchBoxSubmitHandler}
        >
          <label className="search-box__form-label">
            Искать фильм по названию:
            <input
              value={searchLine}
              type="text"
              className="search-box__form-input"
              placeholder="Например, Shawshank Redemption"
              onChange={this.searchLineChangeHandler}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            disabled={!searchLine}
          >
            Искать
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(SearchBox);
