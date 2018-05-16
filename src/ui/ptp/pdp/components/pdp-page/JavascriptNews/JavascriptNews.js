import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './JavascriptNews.scss';



/**
 * Render list of Javascript specific news, fetched from an appropriate sub reddit
 */
export class JavascriptNews extends Component {

  static propTypes = {
    newsList: PropTypes.array,
  };

  static defaultProps = {
    newsList: [],
  };



  renderNewsList() {
    return (
      <ul className="javascript-news__list">
        {this.props.newsList.map((({ title, url }) =>
          <li
            className="javascript-news__item"
            key={url}
          >
            <a
              href={url}
              target="_blank"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    );
  }



  render() {
    return (
      <section className="javascript-news">
        <h2 className="javascript-news__title">Last Javascript News (from Reddit)</h2>
        <div className="javascript-news__list">
          {
            this.props.newsList.length < 1
              ? <p className="javascript-news__empty-list-msg">News list is empty</p>
              : this.renderNewsList()
          }
        </div>
      </section>
    );
  }
}
