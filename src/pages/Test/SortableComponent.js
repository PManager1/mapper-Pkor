import React, {Component} from 'react';
import axios from 'axios'; 
import _ from 'lodash';
import {render} from 'react-dom';
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import RecordComponent from './RecordComponent'; 
import { connect } from "react-redux";
import { fetchSingleRecord, fetchFields, editField } from '../../actions'; 

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
        console.log(' 34 - in SortableComponent constrcutor props.Record._id = ',  props.Record._id ); 
        super(props);
        this.state = {
            resources: [],
            records: ['Header Record 1', 'Details Record', 'Trail Record'],
            items: ['Field 97', 'Field 98', 'Field 99']
        };

        // this.props.fetchSingleRecord(props.Record._id); 
        this.props.fetchSingleRecord('5e000feaaa430e396309a24b'); 
        // resulting value =  this.props.singleRecord
      }

      async componentDidMount(){
        const response = await axios.get(`http://localhost:3030/fieldlist`)
        let sortedResources = response.data.data.sort((a, b) => (a.SequenceNumber > b.SequenceNumber) ? 1 : -1)
        console.log('49-sortedResources=', sortedResources ); 
        this.setState({ resources: sortedResources }); 
      }

  onSortEnd = ({oldIndex, newIndex}) => {
    console.log( ' 34 - oldIndex  = ', oldIndex ); 
    console.log( ' 35 - newIndex  = ', newIndex ); 

    // this.setState(({items}) => ({
    //   items: arrayMove(items, oldIndex, newIndex),
    // }));

    this.setState(({resources}) => ({
      resources: arrayMove(resources, oldIndex, newIndex),
    }));

    console.log( '43 - onSortEnd - this.state.resources  = ', this.state.resources ); 

    console.log( '43 - onSortEnd - oldIndex - this is the updated value', oldIndex);  
    console.log( '43 - onSortEnd - oldIndex', this.state.resources[oldIndex]);
    
    this.state.resources[oldIndex].SequenceNumber = oldIndex;
    console.log( '69 - onSortEnd - this.state.resources[oldIndex].SequenceNumber =', this.state.resources[oldIndex].SequenceNumber );
    console.log( '70 - onSortEnd - oldIndex', this.state.resources[oldIndex]);


    this.props.editField(this.state.resources[oldIndex]._id,  this.state.resources[oldIndex] ); 

    // SECOND 
    console.log( '73 - onSortEnd - newIndex', newIndex);  
    console.log( '74 - onSortEnd - oldIndex', this.state.resources[newIndex]);  
    // this.props.editField(this.state.resources[newIndex]._id,  this.state.resources[newIndex] ); 
    this.props.editField(this.state.resources[newIndex]._id,  this.state.resources[newIndex] ); 


    // maybe send all the objects to save. 
    // we can keep a track of the original arr and when some changes, 
    // I'll know which object changed and i can then send the objects to save.
    

  };


  render() {
    console.log('58- SortableComponent\'s props = ', this.props ); 
    const {items} = this.state;
    const {records} = this.state;
    const { resources } = this.state; 

    console.log('68- SortableComponent\'s resources  = ', resources ); 

    return (<div>
      <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
        {resources.map((value, index) => (
          <SortableItem key={`item-${value.fieldName}`} index={index} value={value} />
        ))}
      </SortableContainer>
        </div>
    );
  }
}


const mapStateToProps = (state) =>{
    console.log( '81 - SortableComponent ->  state.records =', state ); 
    return { singleRecord: state.singleRecord }; 
}; 

export default connect(mapStateToProps, { fetchSingleRecord, fetchFields, editField })(SortableComponent); 

// https://github.com/clauderic/react-sortable-hoc