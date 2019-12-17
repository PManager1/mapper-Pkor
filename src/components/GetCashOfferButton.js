import React from 'react'; 


const GetCashOfferbtnStyle = {
  background: '#f04134',
  color: 'white',
  // margin: '40px',
  // border: '5px solid pink'
};

const GetCashOfferButton = () =>{

    return(
        <div className="text-center">
            <button style={GetCashOfferbtnStyle} type="button" className="btn"> 
            Get Cash Offer Now
            </button>
            </div>
    ); 
}

export default GetCashOfferButton; 