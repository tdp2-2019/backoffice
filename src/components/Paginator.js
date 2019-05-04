import React, { Component } from "react";

class Paginator extends Component {
  state = {
    currentPage: 0
  };

  componentDidUpdate(props) {
    if (
      props.items &&
      this.props.items &&
      props.items.length !== this.props.items.length
    ) {
      this.setState({ currentPage: 0 });
    }
  }

  goToNext = () => {
    if (this.isLastPage()) {
      return;
    }

    this.setState(state => ({ currentPage: state.currentPage + 1 }));
  };

  goToPrev = () => {
    if (this.isFirstPage()) {
      return;
    }

    this.setState(state => ({ currentPage: state.currentPage - 1 }));
  };

  isLastPage = () => this.state.currentPage === this.getNumberOfPages() - 1;
  isFirstPage = () => this.state.currentPage === 0;

  getNumberOfPages() {
    const { items, pageSize } = this.props;
    return Math.ceil(items.length / pageSize);
  }

  getItemsForCurrentPage() {
    const { items, pageSize } = this.props;
    const { currentPage } = this.state;
    const pageStart = pageSize * currentPage;
    const pageEnd = Math.min(pageStart + pageSize, items.length);

    return items.slice(pageStart, pageEnd);
  }

  render() {
    const { currentPage } = this.state;
    const lastPage = this.getNumberOfPages();
    const isFirstPage = this.isFirstPage();
    const isLastPage = this.isLastPage();
    const pageItems = this.getItemsForCurrentPage();

    return (
      <div className="Paginator">
        <div className="Paginator-content">
          {pageItems.map(item => this.props.renderItem(item))}
        </div>
        <div className="Paginator-controls">
          {!isFirstPage && <a onClick={this.goToPrev}>Prev</a>}
          {!isLastPage && <a onClick={this.goToNext}>Next</a>}
          <span>
            Page {currentPage + 1} of {lastPage}
          </span>
        </div>
      </div>
    );
  }
}

export default Paginator;
