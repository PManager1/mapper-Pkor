// https://github.com/clauderic/react-sortable-hoc
import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import styles from './Item.css';


const DragHandle = sortableHandle(() => <span>::</span>);

const SortableItem = sortableElement(({value}) => (
  <div className="theItem">
    <DragHandle />
    {value}
  </div>
));

const SortableContainer = sortableContainer(({children}) => {
  return <ul>{children}</ul>;
});

export default class Later extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  pressDelay = () =>{

  }

  render() {
    const {items} = this.state;

    return (
      <SortableContainer onSortEnd={this.onSortEnd} pressDelay useDragHandle>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer>
    );
  }
}