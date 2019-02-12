import React, {Component} from "react";
import ResultList from "./ResultList";
import API from "../utils/API";
import './style.css';

class Discover extends Component {
  state = {
    search: "",
    result: {}
  };

  componentDidMount() {
    this.searchImage();
  };


  searchImage = () => {
    API.searchRandomImage()
      .then(res => this.setState({result: res.data}))
      .catch(err => console.log(err))
  };

  handleClick = event => {
    event.preventDefault();
    this.searchImage();
  };

  render() {
    return (
      <div >
        <ResultList
          result = {this.state.result}
          handleClick = {this.handleClick}
        />
      </div>
    );
  }
}

export default Discover;
