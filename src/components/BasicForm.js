import React from 'react';
import { Formik } from 'formik'
import { Form, Input, PhoneInput, Select, SubmitBtn } from 'react-formik-ui';

import GetCashOfferButton from './GetCashOfferButton'; 

const GetCashOfferbtnStyle = {
  background: '#f04134',
  color: 'white',
  marginTop: '63px',
  padding: '15px',
  width: '330px',
  bottom: '50px',

};




export const BasicForm = () => (

<Formik
  initialValues={{
    textFieldExample3: '',
    FirstName: '', 
    LastName: '', 
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='themed'>
      
      <Input
        required={true}
        name='FirstName'
        label='First Name'
        hint='This is a FirstName'
      />
      <Input
        required={true}
        name='LastName'
        label='LastName'
        hint='This is a LastName'
      />

      <PhoneInput
        name='phoneNr5'
        label='Phone Nr.'
        format='NATIONAL'
        defaultCountry='us'
        placeholder='(555) 555-5555'
        hint='This is a hint'
      />

     <Input
        required={true}     
        name='Email'
        label='Email'
        hint='This is a Email'
      />

    <Input  
        required={true}    
        name='Street Address'
        label='StreetAddress'
        hint='This is a Street Address'
      />

    <Input  
        required={true}    
        name='City'
        label='City'
        hint='This is a City'
      />


    <Select
        name='State'
        label='Select State'
        placeholder='CA'
        options={[
          { value: '1', label: 'AK' },
          { value: '2', label: 'AZ' },
          { value: '3', label: 'CA' },
          { value: '4', label: 'DC' },
          { value: '5', label: 'LA' },
          { value: '6', label: 'MD' },
        ]}
      />

    <Input  
        required={true}    
        name='Zip+'
        label='Zip'
        hint='This is a Zip'
      />
      <div className="text-center">
      <button type="submit" className="btn"  style={GetCashOfferbtnStyle} >
            Get Cash Offer Now 
          </button>
          </div> 
    </Form>
  )}
/>
); 

export default BasicForm; 


