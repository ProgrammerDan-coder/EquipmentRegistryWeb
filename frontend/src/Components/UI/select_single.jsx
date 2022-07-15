import React, { Component, Fragment } from 'react';

import Select from 'react-select';
import { DeptagsOptions } from '../tags/dep_data.ts';



interface State {
  readonly isClearable: boolean;
  
}

export default class SingleSelect extends Component<{}, State> {
  state: State = {
    isClearable: true
  };

  toggleClearable = () =>
    this.setState((state) => ({ isClearable: !state.isClearable }));
  toggleDisabled = () =>
    this.setState((state) => ({ isDisabled: !state.isDisabled }));
  toggleLoading = () =>
    this.setState((state) => ({ isLoading: !state.isLoading }));
  toggleRtl = () => this.setState((state) => ({ isRtl: !state.isRtl }));
  toggleSearchable = () =>
    this.setState((state) => ({ isSearchable: !state.isSearchable }));

  render() {
   

    const { isClearable, isSearchable, isDisabled, isLoading, isRtl } =
      this.state;

    return (
      
        <Select
          className="basic-single"
          classNamePrefix="select"
      
         
          isClearable={isClearable}
          
          name="color"
          options={DeptagsOptions}
        />


    );
  }
}
