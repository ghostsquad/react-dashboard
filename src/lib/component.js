import PropTypes from './proptypes';
import React from 'react';

class Component extends React.Component {

  static get className() {
    return this.name;
  }

  static get propTypes() {
    return {
      ...super.propTypes,
      className: PropTypes.string
    };
  }

  get className() {
    const {defaultClassName, modifiers, otherClassNames, props} = this;
    return [
      defaultClassName,
      props.className,
      ...modifiers.map((modifier) => `${defaultClassName}--${modifier}`),
      ...otherClassNames
    ].filter(Boolean).join(' ');
  }

  get defaultClassName() {
    return this.constructor.className;
  }

  get modifiers() {
    return [];
  }

  get otherClassNames() {
    return [];
  }

  bem(element, modifier) {
    const {defaultClassName} = this;
    return [
      element && `${defaultClassName}__${element}`,
      element && modifier && `${defaultClassName}__${element}--${modifier}`,
      !element && modifier && `${defaultClassName}--${modifier}`,
      (!element && !modifier) && defaultClassName
    ].filter(Boolean).join(' ');
  }

}

export default Component;
