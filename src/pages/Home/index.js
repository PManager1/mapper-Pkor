import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import { Col, Row, Container, Form } from 'react-bootstrap';
import './index.scss';  
import PropTypes from 'prop-types'; 
import Footer from '../../components/Footer'; 
import iconpenpaper from './ImagesIndex/icon-pen-paper.png';
import iconwallet from './ImagesIndex/icon-wallet.png'; 
import fivestars from './ImagesIndex/5stars.png'; 
import HomeTestimonials from './HomeTestimonials';

import Questions from '../../components/Questions'; 

const Home = () =>{
        return <div> 
        <Container fluid={true} className="tinted-image">
        <section className="insideTinted">
            <h1 className="get-cash-heading"> Get Cash For Your House </h1> 
        
        <h3 className="index-h3">We buy houses - we're home buyers who will buy your house "AS IS" and close on your timeline. You won’t have to clean, paint or fix a thing. Don’t waste
        any more time or money. </h3>
        
        </section>

        <div className="s130 pull-left">
          <form>
            <div className="inner-form">
              <div className="input-field first-wrap">
                <div className="svg-wrapper">
                  <img src="https://img.icons8.com/material-outlined/25/000000/marker.png" />
                  {/* font-size: 30px; */}
                </div>
                <input className="searchTextField" id="searchTextField" type="text" placeholder="Enter your street address" />
              </div>
                <div className="input-field second-wrap">
                  <button className="btn-search" type="button">Get a Cash Offer Now</button>
                </div>
              </div>
            </form>
        </div>
</Container>

    <Container fluid={true} >
            <div className="row">
              <div className="col-sm-6 col-xs-12 text-center">                  
                <h1 className="p-yrs-big"> <span className="hundredk">20+</span>  Years of Experience</h1>
                <p className="p-yrs">We guarantee efficiency and speed </p>
              </div>
              <div className="col-sm-6 col-xs-12 text-center">                  
                <h3 className="p-yrs-big"> <span className="hundredk">100K</span> Houses purchased. </h3>
                <p className="p-yrs">America's #1 Home buyer.</p>
              </div>
            </div>
          </Container>


       {/* Process Container */}
      <Container fluid={true}  className="process">
        <div className="row">
          <div className="col-sm-12 col-xs-12 text-center">  
            <p className="p-above-leading">WE BUY UGLY HOUSES® PROVEN PROCESS </p>
            <h2 className="leading-h2"> Get Offer after a Quick Conversation.</h2>
          </div>
        </div>                
        <br />
        <br />
        <hr />
        {/* icon-calendar */}
        <div className="row push-down">
          <div className="col-sm-4 col-xs-12 text-center calendar">  
            <h4 className="calendar-first ">Call/ Text Chat </h4>
            {/* <img src="/Images/index/icon-calendar.png" alt="schedule for visit"> */}
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 512 512"><g fill="#1096fc"><path d="M329.44 0h10.11c28 .68 55.98 6.46 81.55 17.99 27.01 12.18 51.58 30.94 68 55.83 13.11 19.7 20.35 43.46 19.3 67.18-.82 23.13-9.46 45.62-23.22 64.11-13.61 18.44-31.81 33.19-51.9 44.05-26.52 14.34-56.36 22.07-86.39 23.77-1.5-.22-1.9 1.5-2.62 2.4-6.6 11.28-15.72 21.12-26.64 28.33-14.28 9.44-31.62 13.94-48.67 13.47-4.84-.24-6.97-7.25-3.09-10.13 5.59-4.16 11.17-9.58 11.97-16.89.87-9.25-3.84-17.8-8.47-25.45-1.1-2.63-4.15-2.89-6.48-3.82-17.83-6.36-34.78-15.35-49.77-26.95-21.02-16.21-38.21-38.11-46.34-63.58-7.9-24.28-6.84-51.27 2.76-74.9 10.55-26.42 30.65-48.2 54.22-63.71 31.21-20.51 68.52-30.65 105.68-31.7m-34.95 15.73c-32.83 6.55-64.6 21.45-88.28 45.45-17.54 17.65-30.07 40.91-32.43 65.89-2.6 24.37 4.85 49.22 19.01 69.05 18.42 26 46.35 44.09 76.2 54.37 2.63 1.08 6.03 1.3 7.7 3.92 5.32 7.79 10.1 16.22 12.16 25.51 1.91 8.12.79 17.01-3.73 24.11 17.44-2.82 33.37-12.9 43.89-27.02 3.15-4.05 5.67-8.52 8.14-13 1.53-2.81 5.04-2.72 7.8-2.79 38.08-1.85 76.28-14.11 106.34-37.96 20.84-16.54 37.44-39.44 43.13-65.72 5.32-23.66 1.07-49.05-10.83-70.08-14.52-25.98-38.72-45.46-65.45-57.88-38.33-17.7-82.35-21.93-123.65-13.85zM231.4 97.42c1.41-.74 3.09-.35 4.62-.48 42.36.02 84.71.01 127.07.01 2.55-.2 4.74 2.53 3.92 4.98-.51 2.19-2.91 3.11-4.96 2.87-43.01-.08-86.02.06-129.03-.07-3.78.06-5.05-5.73-1.62-7.31zM390.35 97.47c5.75-1.1 11.87-.32 17.76-.48 4.2-.27 5.31 6.35 1.31 7.55-5.78.54-11.65.16-17.46.18-3.69-.01-4.91-5.63-1.61-7.25zM466.36 101.38c1.84-.99 4.43-.06 5.19 1.9 6.82 18.42 7.02 39.15.87 57.78-5.53 16.95-16.03 32.23-29.82 43.51-2.15 2.01-6.07.47-6.32-2.42-.44-1.91 1.05-3.38 2.4-4.46 13.9-11.72 24.02-27.93 28.18-45.66 3.62-14.96 2.71-30.93-2.36-45.45-.9-1.89-.09-4.36 1.86-5.2zM232.28 131.4c29.23-.31 58.48-.05 87.73-.13 2.58-.41 5.2 2.05 4.49 4.69-.28 2.07-2.47 3.33-4.43 3.15-29.05-.09-58.1.1-87.15-.09-4.24-.02-4.78-6.84-.64-7.62zM348.38 131.48c20.08-.44 40.24-.19 60.34-.12 4.6.38 3.98 8.03-.64 7.69-19.38.08-38.76.06-58.14.02-4.36.5-5.72-6.35-1.56-7.59zM232.37 168.52c30.55-.27 61.13-.02 91.69-.12 1.96-.22 4.31.64 4.79 2.76.95 2.48-1.39 5.3-3.98 5.07-30.6-.06-61.19.06-91.79-.06-4.37.14-5.04-6.97-.71-7.65zM344.43 168.6c4.36-.39 8.8-.23 13.18-.09 3.87.53 4.1 6.62.34 7.55-4.33.3-8.69.18-13.02.09-3.87-.49-4.25-6.56-.5-7.55zM410.41 213.55c1.5-.55 3.31-.83 4.61.35 2.39 1.68 1.72 5.87-1.08 6.68-4.87 1.69-9.9 3.04-15.01 3.68-2.85.22-4.92-3.36-3.4-5.75.84-1.78 2.92-1.97 4.63-2.33 3.47-.62 6.89-1.55 10.25-2.63z" /></g><g fill="#01305d"><path d="M108.35 141.55c2.12-1.46 5.16-.06 5.85 2.32 13.45 32.47 27.03 64.89 40.46 97.38 1.21 2.13-.37 5.11-2.77 5.44-2.05.46-4.02-1.02-4.6-2.94-13.45-32.29-26.9-64.57-40.29-96.88-1.03-1.8-.5-4.29 1.35-5.32zM38.07 154.08c11.69-5.9 24.9-8.31 37.91-8.62 5.53.09 11.48.25 16.33 3.24 3.14 1.9 3.82 5.74 5.15 8.88 12.26 30.95 24.55 61.89 36.84 92.83 1.99 4.71-1.37 9.32-3.68 13.23-7.26 10.82-16.26 20.33-25.29 29.68-1.63 1.82-3.8 3.3-4.87 5.55 2.26 6.34 6.96 11.38 10.85 16.75 25.06 31.38 53.48 60.1 84.7 85.37 6.38 4.87 12.46 10.49 20.01 13.49 9.13-9.05 18.25-18.16 28.35-26.14 4.25-3.22 8.63-6.5 13.74-8.21 1.79-.67 3.77-.59 5.52.18 32.92 13.1 65.86 26.19 98.79 39.26 4.17 2.48 5.26 7.76 5.87 12.21.99 11.62-.63 23.39-4.04 34.51-1.99 6.13-4.52 12.24-8.61 17.29-16.16 18.04-40.21 27.74-64.2 28.42h-7.76c-31.39-1.44-61.33-13.07-88.62-28.03-41.23-22.98-77.64-53.96-109.2-88.92-25.79-28.92-48.51-60.94-64.56-96.32-10.83-24.37-18.65-50.75-17.68-77.65.63-17.99 6.06-36.03 16.88-50.55 4.87-6.39 10.2-12.86 17.57-16.45m18.93 5.43c-6.52 1.6-13.2 3.75-18.42 8.13-5.74 5.36-10.52 11.74-14.21 18.67-9.3 17.52-10.75 38.19-7.8 57.52 4.6 30.16 17.79 58.28 33.52 84.15 18.62 30.4 41.63 57.97 67.15 82.81 20.18 19.47 42.06 37.26 65.72 52.35 17.16 10.9 35.27 20.44 54.42 27.38 20.9 7.43 43.5 12.04 65.67 8.46 15.04-2.28 29.31-9.2 40.37-19.65 7.19-6.21 9.97-15.81 11.85-24.78 1.39-8.22 2.5-16.78.71-25.02-32.05-12.59-64.02-25.39-96.01-38.12-3.69 2.02-6.92 4.73-10.14 7.41-8.68 7.29-16.83 15.18-24.81 23.23-2.25 2.48-5.92 2.74-9.03 2.16-5.1-1.05-9.8-3.42-14.31-5.95-11.92-7.01-22.58-15.91-32.93-25.02-14.91-13.34-29.13-27.46-42.64-42.21-10.35-11.46-20.52-23.22-28.56-36.45-3.48-6.02-7.19-12.46-7.23-19.61.08-5.19 5.24-7.87 8.19-11.46 8.64-9.39 18.45-18.1 24.77-29.31-12.81-32.05-25.49-64.15-38.23-96.23-9.32-1.7-18.88-.47-28.05 1.54zM271.23 360.31c1.28-.58 2.61-.08 3.82.43 31.2 13.24 62.42 26.44 93.63 39.67 1.85.58 3.45 2.35 3.06 4.41-.18 2.64-3.39 4.21-5.66 2.92l-92-38.93c-1.73-.84-3.96-1.23-4.91-3.08-1.08-1.98-.03-4.64 2.06-5.42z" /></g></svg>
            <p className="p-after-calendar">Free, no-obligation consultation.</p>
          </div>  
          <div className="col-sm-4 col-xs-12 text-center">  
            <h4 className="calendar-first">Get a cash offer </h4>
            <img src={iconpenpaper} alt="icon pen paper" />
            <p className="p-after-calendar">You sell directly to us. No expensive real estate commissions. </p>
          </div>
          <div className="col-sm-4 col-xs-12 text-center">  
            <h4 className="calendar-first">You get paid </h4>
            <img src={iconwallet} alt="icon wallet" />
            <p className="p-after-calendar">We can close as quickly or as slowly as you choose - our promise to you. </p>
          </div>                                                            
        </div> 
        <div className="row how-works"> 
          <div className="col-sm-12 col-xs-12 text-center">  
            <button type="button" className="btn btn-success"> 
              How it works ?
            </button>
          </div>
        </div>       
      </Container>


      <div className="text-center push-down">
        <p className="p-above-leading">Benefits of working wih us </p>
        <h2 className="leading-h2"> Comparison with industry standard.</h2>
      </div>


   {/* comparison */}
   
   <div className="comparison">
        <table>
          <thead>
            <tr>
              <th className="tl tl2" />
              <th className="product" style={{background: '#69C7F1', borderTopLeftRadius: '5px', borderLeft: '0px'}}>Liberty Trust </th>
              <th className="product" style={{background: '#69C7F1'}}>Traditional Methods</th>
              <th className="product" style={{borderTopRightRadius: '5px', borderRight: '0px', background: '#69C7F1'}}>Others</th>
            </tr>
            <tr>
              <th />
              <th className="price-info">
                <div className="price-now"><span>$&nbsp;Price</span>
                  <p>&nbsp;&nbsp;/&nbsp;year</p>
                </div>
              </th>
              <th className="price-info">
                <div className="price-now"><span>$&nbsp;Price</span>
                  <p>&nbsp;&nbsp;/&nbsp;year</p>
                </div>
              </th>
              <th className="price-info">
                <div className="price-now"><span>$&nbsp;Price</span>
                  <p>&nbsp;/&nbsp;year</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td colSpan={3}>No Fees</td>
            </tr>
            <tr className="compare-row">
              <td>No Fees</td>
              <td><span className="tickblue">✔</span>
              </td>
              <td><span className="tickgreen">✔</span></td>
              <td><i className="fa fa-check" />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={3}>No Closing Costs</td>
            </tr>
            <tr>
              <td>No Closing Costs</td>
              <td><i className="fa fa-check" />
              </td>
              <td><span>–</span></td>
              <td><i className="fa fa-check" />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={3}>With directly with us, we're local</td>
            </tr>
            <tr>
              <td>With directly with us, we're local</td>
              <td><i className="fa fa-check" />
              </td>
              <td><span>–</span></td>
              <td><i className="fa fa-check" />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={3}>No Repairs Needed</td>
            </tr>
            <tr className="compare-row">
              <td>No Repairs Needed</td>
              <td><i className="fa fa-check" />
              </td>
              <td><span>–</span></td>
              <td><i className="fa fa-check" />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={4}>Flexible Closing Date</td>
            </tr>
            <tr>
              <td>Flexible Closing Date</td>
              <td><i className="fa fa-check" />
              </td>
              <td><span>–</span></td>
              <td><i className="fa fa-check" />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={3}>Offer After One Quick Conversation</td>
            </tr>
            <tr className="compare-row">
              <td>Offer After One Quick Conversation</td>
              <td><span>–</span></td>
              <td><span>–</span></td>
              <td><i className="fa fa-check" />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={4}>Dedicated Local Support</td>
            </tr>
            <tr>
              <td>Dedicated Local Support</td>
              <td><span>–</span></td>
              <td><span>–</span></td>
              <td><i className="fa fa-check" />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={3}>Industry Leading Analytics</td>
            </tr>
            <tr className="compare-row">
              <td>Industry Leading Analytics</td>
              <td><span>–</span></td>
              <td><span>–</span></td>
              <td><i className="fa fa-check" />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={3}>Highly Qualified Buyer</td>
            </tr>
            <tr>
              <td>Highly Qualified Buyer</td>
              <td><span>–</span></td>
              <td><i className="fa fa-check" />
              </td>
              <td><i className="fa fa-check" />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={3}>Easy &amp; Stressfree Way to Sale</td>
            </tr>
            <tr className="compare-row">
              <td>Easy &amp; Stressfree Way to Sale</td>
              <td><span>–</span></td>
              <td><i className="fa fa-check" />
              </td>
              <td><i className="fa fa-check" />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td colSpan={3}>Help with Moving and Tenants</td>
            </tr>
            <tr>
              <td>Help with Moving and Tenants</td>
              <td colSpan={3}>description_union row</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td />
              <td colSpan={3}>
                <button type="button" className="btn  cashOfferBtn"> 
                  Get Cash Offer Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>




      {/* testimonials start */}
      <Container fluid={true}  >
        <div className="text-center">
          <p className="p-above-leading">Testimonials and Reviews </p>
          <h2 className="leading-h2"> See what our satisfied sellers have to say.</h2>
        </div>
        <div className="row push-down">
          <div className="col-sm-4 col-xs-12"> 
            <div className="testi-col">   
              <div className="text-center">
                <img className="fivestar"  src={fivestars} alt="" /> 
              </div>     
              <p className="testi-p"> first The people that work at Homevestors made the experience very pleasant.</p> 
              <p className="testi-name text-center"> Jay2 </p>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 ">
            <div className="testi-col">  
              <div className="text-center">
                <img className="fivestar" src={fivestars} alt="" /> 
              </div>     
              <p className="testi-p"> the people that work at Homevestors made the experience very pleasant.</p> 
              <p className="testi-name text-center"> Jay </p>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 ">
            <div className="testi-col">   
              <div className="text-center">
                <img className="fivestar" src={fivestars} alt="" /> 
              </div>     
              <p className="testi-p"> the people that work at Homevestors made the experience very pleasant.</p> 
              <p className="testi-name text-center"> Jay3 </p>
            </div>
          </div>
        </div>
      
      </Container>
      <br/> <br/>
      {/* <HomeTestimonials /> */}


  <br/> <br/>

{/* yellow  */}

<Questions />


      <Footer />
    </div>
}

Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid className
}
export default Home; 