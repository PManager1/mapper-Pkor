import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Item.css';
import Typography from '@material-ui/core/Typography';
import RecordComponent from './RecordComponent'; 

const DragHandle = sortableHandle(() => <span>::</span>);
const SortableItem = sortableElement(({value}) => (
  <div className="theItem">
    <DragHandle />
    <RecordComponent />
  </div>
));

const SortableContainer = sortableContainer(({children}) => {
  return <ul>{children}</ul>;
});

export default class SortableComponent extends Component {

  state = {
    records: ['Header Record 1', 'Details Record', 'Trail Record'],
    items: ['Field 1', 'Field 2', 'Field 3']
  };

  

  onSortEnd = ({oldIndex, newIndex}) => {
    console.log( ' 34 - oldIndex  = ', oldIndex ); 
    console.log( ' 35 - newIndex  = ', newIndex ); 

    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));

    console.log( '43 - this.state.items  = ', this.state.items ); 
  };



  render() {

    console.log('51- SortableComponent\'s props = ', this.props ); 

    const {items} = this.state;
    const {records} = this.state;

    const listItems = records.map((number) =>
    <p>{number}</p>
  );

    return (<div>
      {/* <Typography variant='h5' align='left'> {listItems}</Typography> */}

      <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer>
        </div>
    );
  }
}

// https://github.com/clauderic/react-sortable-hoc