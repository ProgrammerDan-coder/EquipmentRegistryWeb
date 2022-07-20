import React, { Component, Fragment } from 'react';

import Select from 'react-select';
import { DeptagsOptions } from '../tags/dep_data.ts';

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

interface State {
  readonly isClearable: boolean;
  readonly isDisabled: boolean;
  readonly isLoading: boolean;
  readonly isRtl: boolean;
  readonly isSearchable: boolean;
}

export default class SingleSelect extends Component<{}, State> {
  state: State = {
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
  };

  toggleClearable = () =>
    this.setState((state) => ({ isClearable: !state.isClearable }));
  

  render() {
    const {
      toggleClearable,
     
    } = this;

    const { isClearable, isSearchable, isDisabled, isLoading, isRtl } =
      this.state;

    return (
      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={DeptagsOptions}
        />

        
      </Fragment>
    );
  }
}
