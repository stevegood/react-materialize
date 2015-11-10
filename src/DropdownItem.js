import React from 'react';

class DropdownItem extends React.Component {
  let {children, onClick} = this.props;
  render() {
    return (
      <li>
        <a href='#' onClick={onClick}>
          {children}
        </a>
      </li>
    );
  }
}
