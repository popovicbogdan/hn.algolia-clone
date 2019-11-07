import React from "react";
import Story from "./Story";

import { connect } from "react-redux";
import { getArticles } from "../../store/actions/articles";

class Items extends React.Component {
  componentDidMount() {
    const tag = this.props.search.type ? this.props.search.type : "comment";
    const sort =
      this.props.search.sort === "byDate" ? "search_by_date" : "search";
    console.log(tag, sort);

    this.props.getArticles(sort, tag);
  }

  componentDidUpdate(prevProps) {
    const tag = this.props.search.type ? this.props.search.type : "comment";
    const sort =
      this.props.search.sort === "byDate" ? "search_by_date" : "search";
    console.log("PREVIOUS PROPS===", prevProps);
    console.log("CURRENTPROPS PROPS==", this.props);
    if (
      prevProps.search.type !== this.props.search.type ||
      prevProps.search.sort !== this.props.search.sort
    ) {
      this.props.getArticles(sort, tag);
    }
  }

  render() {
    console.log("ITEMS PROPS WITH MAPSTATETOPROPS", this.props);

    return this.props.items ? (
      this.props.items.map(item => <Story key={item.objectID} item={item} />)
    ) : (
      <div className="container">
        <p>Loading....</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STORESTATE==== ", state.articles.articles);
  return {
    items: state.searchByWord
      ? state.articles.articles.filter(
          elem =>
            elem.comment_text.includes(state.searchByWord) ||
            elem.story_title.includes(state.searchByWord)
        )
      : state.articles.articles,
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getArticles: (sort, tag) => dispatch(getArticles(sort, tag))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
