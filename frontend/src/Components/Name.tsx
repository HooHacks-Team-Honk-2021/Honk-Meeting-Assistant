/* eslint-disable */
import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';

export default class CreatableMulti extends React.Component{
  handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    return (
      <CreatableSelect
        isMulti
        onChange={this.handleChange}
      />
    );
  }
}