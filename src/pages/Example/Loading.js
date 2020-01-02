import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker";
 
import { Spinner } from './common/components/spinner/spinner.js';

const LoadingSpiner = (props) => {
const { promiseInProgress } = usePromiseTracker();
 
  return (
    <div>
        some loading info
        <Spinner />
  </div>
  )
};

export default LoadingSpiner; 