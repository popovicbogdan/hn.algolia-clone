import React from "react";
import { Select } from "react-materialize";
import Items from "./Items";
import { connect } from "react-redux";
import { setSearchParams } from "../../store/actions/articles";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "byPopularity",
      type: "",
      dateRange: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
    this.props.setSearchParams(e.target.name, e.target.value);
  }
  render() {
    var hits = this.props.articles ? this.props.articles.length : "";
    console.log("SEATRCH STATE===", this.state);
    console.log(this.props.numbOfHits);
    return (
      <div className="container">
        <div className="SearchOptions container">
          <div className="container">
            <span id="hide">Search</span>
            <Select
              id="select"
              name="type"
              defaultValue="all"
              onChange={this.handleChange}
            >
              <option value="all">All</option>
              <option value="story">Stories</option>
              <option value="comment">Comments</option>
            </Select>
            <span id="hide">by</span>
            <Select
              id="select"
              name="sort"
              defaultValue="byPopularity"
              onChange={this.handleChange}
            >
              <option value="byPopularity">Popularity</option>
              <option value="byDate">Date</option>
            </Select>
            <span id="hide">for</span>
            <Select
              id="select"
              name="dateRange"
              defaultValue="all"
              onChange={this.handleChange}
            >
              <option value="all">All time</option>
              <option value="last24h">Last 24 hours</option>
              <option value="pastWeek">Past week</option>
              <option value="pastMonth">Past month</option>
              <option value="pastYear">Past year</option>
              <option value="custom">Custom range</option>
            </Select>
          </div>

          <div className="container">
            <span id="results">{hits} results</span>
          </div>
        </div>
        <Items searchParams={this.state} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSearchParams: (name, param) => dispatch(setSearchParams(name, param))
  };
};
const mapStateToProps = state => {
  return {
    articles: state.articles.articles
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
