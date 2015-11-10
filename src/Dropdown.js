import React from 'react';
import Icon from './Icon';

class Dropdown extends React.Component {
  renderIcon() {
    let {iconJustify, icon} = this.props;
    if (!icon) return '';
    return (
      <Icon {iconJustify}>{icon}</Icon>
    );
  }

  render() {
    let id = 'dropdown-' + (new Date().getTime());
    return (
      <div className='dropDownGroup'>
        <ul id={id} className='dropdown-content'>
          {this.props.children}
        </ul>
        <a
          className='btn dropdown-button'
          href='#'
          data-activates={id}>
          {this.props.label}
          {this.renderIcon()}
        </a>
      </div>
    );
  }
}

Dropdown.propTypes = {
  icon: React.PropTypes.string,
  iconJustify: React.PropTypes.string
};

export default Dropdown;
