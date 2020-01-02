import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker";
 
import { Spinner } from '../../components/common/components/spinner/spinner.js';

const LoadingSpiner = (props) => {
 
  return (
    <div>
        some loading info
        <Spinner />
  </div>
  )
};

export default LoadingSpiner; 