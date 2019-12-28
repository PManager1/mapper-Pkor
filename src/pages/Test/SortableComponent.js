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
import { connect } from "react-redux";
import { fetchSingleClient } from '../../actions'; 

const DragHandle = sortableHandle(() => <span>::</span>);


const SortableItem = sortableElement(({value}) => (
    // console.log('16- SortableComponents props = ', this.props );
  <div className="theItem">
    <DragHandle />
    <RecordComponent value={value} />
  </div>
));

const SortableContainer = sortableContainer(({children}) => {
  return <ul>{children}</ul>;
});

class SortableComponent extends Component {

    constructor(props) {
        console.log(' 30 - in constrcutro this.props = ',  props.RecordId ); 
        super(props);
        this.state = {
            records: ['Header Record 1', 'Details Record', 'Trail Record'],
            items: ['Field 98', 'Field 99', 'Field 100']
        };

        // this.props.fetchSingleClient(); 
      }


  onSortEnd = ({oldIndex, newIndex}) => {
    console.log( ' 34 - oldIndex  = ', oldIndex ); 
    console.log( ' 35 - newIndex  = ', newIndex ); 

    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));

    console.log( '43 - this.state.items  = ', this.state.items ); 
  };


  render() {
    console.log('58- SortableComponent\'s props = ', this.props ); 
    const {items} = this.state;
    const {records} = this.state;

    const listItems = records.map((number) =>
    <p>{number}</p>
  );

    return (<div>
      <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer>
        </div>
    );
  }
}


const mapStateToProps = (state) =>{
    console.log( '51 -  state.records =', state.records ); 
    return { records: state.records.data }; 
}; 

export default connect(mapStateToProps, { fetchSingleClient })(SortableComponent); 

// https://github.com/clauderic/react-sortable-hoc