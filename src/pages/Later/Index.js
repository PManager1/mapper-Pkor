// https://github.com/clauderic/react-sortable-hoc
import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { makeStyles } from '@material-ui/core/styles';
import RecordComponent from './RecordComponent'; 

import styles from './Item.css';

const DragHandle = sortableHandle(() => <span>::</span>);

const SortableItem = sortableElement(({value}) => (
  <div className="theItem">
    <DragHandle />
    <RecordComponent />
    {value}
  </div>
));

const SortableContainer = sortableContainer(({children}) => {
  return <ul>{children}</ul>;
});

export default class Later extends Component {


  state = {
    items: ['Field 1', 'Field 2', 'Field 3', 'Field 4', 'Field 5', 'Field 6'],
  };


  onSortEnd = ({oldIndex, newIndex}) => {
    console.log( ' 34 - oldIndex  = ', oldIndex ); 
    console.log( ' 35 - newIndex  = ', newIndex ); 

    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));

    console.log( ' 35 - this.state.items  = ', this.state.items ); 
  };

  pressDelay = () =>{

  }

  render() {
    const {items} = this.state;

    return (<div>
      <SortableContainer onSortEnd={this.onSortEnd} pressDelay useDragHandle>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer>
      <RecordComponent />
        </div>
    );
  }
}