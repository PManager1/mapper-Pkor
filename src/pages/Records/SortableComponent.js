import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import {render} from 'react-dom';

import './Item.css';
import DragHandleIcon from '@material-ui/icons/DragHandle';

import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import RecordComponent from './RecordComponent';
import { connect } from "react-redux";
import { fetchSingleRecord, fetchFields, editField } from '../../actions';

const DragHandle = sortableHandle(() => <span> <DragHandleIcon/>  </span>);


const SortableItem = sortableElement(({value}) => (
  <div className="theItem">
    <RecordComponent DragHandle={DragHandle} value={value} />
  </div>
));

const SortableContainer = sortableContainer(({children}) => {
  return <span>{children}</span>;
  // return <ul>{children}</ul>;
});

class SortableComponent extends Component {

    constructor(props) {
        // console.log(' 34 - in SortableComponent constrcutor props.Record._id = ',  props.Record._id );
        super(props);
        this.state = {
            fields: [],
            items: ['Field 97', 'Field 98', 'Field 99']
        };

        // this.props.fetchSingleRecord(props.Record._id);
        this.props.fetchSingleRecord('5e000feaaa430e396309a24b');
        // resulting value =  this.props.singleRecord
      }


      async componentDidMount(){
        console.log('50 - Records > SortableComponent this.props =', this.props );
        const { _id } = this.props.Record;
        console.log('51 - Records > SortableComponent this.props RecordID=', _id );

        const response = await axios.get(`http://localhost:3030/fieldlist`);

        const fields_With_Record_Id = _.filter(response.data.data, function(o) { return o.RecordId === _id });

        console.log('59-fields_With_Record_Id=', fields_With_Record_Id);

        let sortedfields = fields_With_Record_Id.sort((a, b) => (a.SequenceNumber > b.SequenceNumber) ? 1 : -1)

        console.log('59-sortedfields=', sortedfields );
        this.setState({ fields: sortedfields });
      }

  onSortEnd = ({oldIndex, newIndex}) => {
    console.log( ' 34 - oldIndex  = ', oldIndex );
    console.log( ' 35 - newIndex  = ', newIndex );

    // this.setState(({items}) => ({
    //   items: arrayMove(items, oldIndex, newIndex),
    // }));

    this.setState(({fields}) => ({
      fields: arrayMove(fields, oldIndex, newIndex),
    }));

    this.state.fields.forEach((obj, index) =>{

      console.log(' index = ', index );
      console.log(' obj = ', obj );
      this.state.fields[index].SequenceNumber = index;

      this.props.editField(this.state.fields[index]._id,  this.state.fields[index] );

    });
  };


  render() {
    // console.log('58- SortableComponent\'s props = ', this.props );
    const {items} = this.state;
    const { fields } = this.state;

    // console.log('68- SortableComponent\'s fields  = ', fields );

    return (<div>
      <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
        {fields.map((value, index) => (
          <SortableItem key={`item-${value.fieldName}`} index={index} value={value} />
        ))}
      </SortableContainer>
        </div>
    );
  }
}


const mapStateToProps = (state) =>{
    // console.log( '81 - SortableComponent ->  state.records =', state );
    return { singleRecord: state.singleRecord };
};

export default connect(mapStateToProps, { fetchSingleRecord, fetchFields, editField })(SortableComponent);

// https://github.com/clauderic/react-sortable-hoc