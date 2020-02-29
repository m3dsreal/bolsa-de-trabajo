import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Card.scss';

class Card extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render() {
    const {
      className,
      layout,
      children,
      containerStyle,
      cardStyle,
      padding,
      marginBottom,
      idName
    } = this.props;

    const containerStyles = {
      width: '100%',
      height: '100%',
      ...containerStyle,
    };

    const cardStyles = {
      padding: padding ? '40px' : '5px 10px',
      borderRadius: '6px',
      ...cardStyle
    };

    let classes;

    if (className === '') {
      if (layout === 1) {
        classes = classNames('col-lg-3', 'col-sm-6', 'col-xs-12');
      }
      if (layout === 2) {
        classes = classNames('col-sm-6', 'col-xs-12');
      }
      if (layout === 3) {
        classes = classNames('col-lg-9', 'col-md-8', 'col-sm-6', 'col-xs-12');
      }
      if (layout === 4) {
        classes = classNames('col-md-12');
      }
    } else {
      classes = className;
    }
    let marginBottomCard = marginBottom ? 'mb-3' : '';
    return (
      <div className={`${classes} ${marginBottomCard}`} style={containerStyles} id={idName ? idName : '' }>
        <div className="card" style={cardStyles}>
          {children}
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  className: PropTypes.string,
  layout: PropTypes.number,
  children: PropTypes.node.isRequired,
  cardStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  padding: PropTypes.bool,
};

Card.defaultProps = {
  className: '',
  layout: 4,
  onClickMenu: null,
  padding: false,
  marginBottom: false,
};

export { Card };
