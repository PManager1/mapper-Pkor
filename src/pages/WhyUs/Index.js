import React from 'react';
// import './Testimonials.scss';  

import BasicForm from '../../components/BasicForm'; 
import fivestars from '../../Images/testimonials/five-stars-reviews.png';
import styled from 'styled-components';
import Footer from '../../components/Footer'; 
import Questions from '../../components/Questions'; 

import quote from '../../Images/faq/quote.png'; 


const PushDownSection = styled.section`
  margin-top:30px; 
`;

const GetCashOfferbtnStyle = {
  background: '#f04134',
  color: 'white',
  marginTop: '63px',
  padding: '15px',
  width: '330px',
  bottom: '50px',
};

  const WhyUs = () =>{
    return (<div> 
      <section className="container-fluid tinted-image"> 
          <h1 className="faq-header text-center"> We Buy Ugly Houses Reviews from Recent Sellers. </h1>
          <h3 className="index-h3 text-center">Find out what people are asking about We Buy Ugly Houses®. </h3>
          <div className="s130">
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
        </section>

        {/* SECOND Container */}
        <div>
          <div className="row">
            <div className="col-sm-7 col-xs-12 left-faq">                  
              <h1 className="quote "> <img src={quote} alt="" /></h1>
              <p className="quote-p">I lived in the house for 32 years, and spent the last three years trying to fix it up and sell. Finally, I had to sell it quickly and was tired of putting money into rehabbing the house, plus traveling more than 65 miles to work each day. A friend of mine encouraged me to call even though I really didn’t have an ugly house. They saw the care and the work that I put into the house, and they made me a great offer. HomeVestors was my answer! — Brenda T. </p>
              <h1 className="almost-done-yellow-top push-down">
                If you’re selling a house, you probably have a lot of questions. Here are some of the most common ones people ask us.
              </h1>
              <p>If you have additional questions, we’d be more than happy to answer them. Just call 866-288-9525 and get the answers you’re looking for.</p>
              {/* faq accordian  */}
              <div className="centerplease">
                FAQ accordion
              </div>
              <br />
              <div className="row">
                <div>
                  <input type="checkbox" id="question1" name="q" className="questions" />
                  <div className="plus">+</div>
                  <label htmlFor="question1" className="question">
                    Who Typically Sells Houses to our company?
                  </label>
                  <div className="answers">
                    People from all walks of life sell to us, but they all share one thing in common: They want to sell a house quickly, to a trusted home buyer who can make a cash offer and close on their schedule.
                    <br /> 
                    Here are just some of the reasons people sell to us:
                    Need to sell an inherited property quickly.
                    Want to unload a rental property with problem renters.
                    Relocating or job transfer.
                    Going through a divorce.
                    Falling behind on mortgage payments and facing possible foreclosure.
                    Not wanting to deal with a structural or repair issues.
                    Simply moving, but not wanting to mess with repairs, painting, or cleaning.
                    …and more
                  </div>
                  <hr /> 
                </div>
                <div>
                  <input type="checkbox" id="question8" name="q" className="questions" />
                  <div className="plus">+</div>
                  <label htmlFor="question8" className="question">
                    Am I Under Any Obligation At All If I Request A Cash Offer Or Arrange A Visit?
                  </label>
                  <div className="answers">
                    No. Visiting your home and making a cash offer entails absolutely no obligation on your part. We’re more than happy to visit your house, answer your questions, and make an offer. There’s no obligation. You’re free to either accept or decline the offer.
                  </div>
                  <hr /> 
                </div>        
                <div>
                  <input type="checkbox" id="question9" name="q" className="questions" />
                  <div className="plus">+</div>
                  <label htmlFor="question9" className="question">
                    How Do You Determine The Cash Offer You'll Make For My Home?
                  </label>
                  <div className="answers">
                    After buying 100,000 homes, we have estimating down to a science. Before making you an offer, the franchisee in your market will evaluate a number of factors, including the following:
                    The current condition of your house.
                    The approximate cost of repairs and renovations required.
                    The amount of time it will take to renovate your house.
                    The future “post-renovation” value of your house, compared to other homes in the area.
                    The amount of real estate commissions required to sell your home after renovation.
                    The cost of maintaining the house until it’s ready to sell, including insurance, utilities, taxes, loan payments, and more.
                    The estimated future “post-renovation” value of your renovated house, minus these costs, helps us arrive at the cash offer that we make.
                  </div>
                  <hr /> 
                </div>     
                <div>
                  <input type="checkbox" id="question2" name="q" className="questions" />
                  <div className="plus">+</div>
                  <label htmlFor="question2" className="question">
                    What Exactly is an 'Ugly' House?
                  </label>
                  <div className="answers">
                    People from all walks of life sell to us, but they all share one thing in common: They want to sell a house quickly, to a trusted home buyer who can make a cash offer and close on their schedule.
                    <br /> 
                    The phrase ‘We Buy Ugly Houses’ lets sellers know that we are willing to buy houses that are either in poor condition or, for one reason or another, might not be attractive to all buyers. This includes some of the following reasons:
                    Houses with serious structural issues such as foundation, roof, plumbing, or electrical problems.
                    Houses located in less than desirable or high-crime neighborhoods.
                    Houses that are located in flood plain or in areas prone to the effects of weather.
                    Houses with high-interest rates or undesirable mortgage financing.
                    Houses with payments or balances that are too high for the owner to handle.
                    Houses that have bad memories for the homeowner, such as a death, divorce, or tragedy.
                    Houses that no longer serve the needs of the homeowner — too big, too small, inconvenient location, and so on.
                  </div>
                  <hr /> 
                </div>
                <div>
                  <input type="checkbox" id="question3" name="q" className="questions" />
                  <div className="plus">+</div>
                  <label htmlFor="question3" className="question">
                    How Does the House Buying Process Work?
                  </label>
                  <div className="answers">
                    We follow a quick and simple process that makes things easy for sellers:
                    CALL US TO SCHEDULE A VISIT. Give us a little information about your house. You can do this by calling us at 866-200-6475, or by using the contact form on this website.
                    GET A CASH OFFER. A local franchisee in your area will contact you to arrange a visit. Our franchisee will answer any questions you have about We Buy Ugly Houses and evaluate the condition of your house. If buying makes sense from an investment standpoint, you’ll get a cash offer for your house.
                    CLOSE ON YOUR SCHEDULE. You are under no obligation to accept the cash offer. But if you do, we’ll set up a closing time that works for you, so you can get your cash and move on as quickly as you wish.
                  </div>
                  <hr /> 
                </div>
                <div>
                  <input type="checkbox" id="question4" name="q" className="questions" />
                  <div className="plus">+</div>
                  <label htmlFor="question4" className="question">
                    Am I Under Any Obligation At All If I Request A Cash Offer Or Arrange A Visit?
                  </label>
                  <div className="answers">
                    No. Visiting your home and making a cash offer entails absolutely no obligation on your part. We’re more than happy to visit your house, answer your questions, and make an offer. There’s no obligation. You’re free to either accept or decline the offer.
                  </div>
                  <hr /> 
                </div>
                <div>
                  <input type="checkbox" id="question5" name="q" className="questions" />
                  <div className="plus">+</div>
                  <label htmlFor="question5" className="question">
                    Are Other Companies That Claim To Buy 'Ugly Houses' Associated With You?
                  </label>
                  <div className="answers">
                    No. Over the years, we’ve been so successful that many small companies and investors try to mimic us. Sometimes, they go too far and actually copy some of the things that we’ve trademarked. We frequently find ourselves fighting for our legal right to protect the integrity of our business, but it still goes on.
                    If you ever find yourself dealing with a buyer and you’re not sure if they are actually a trusted We Buy Ugly Houses franchisee, simply call us at 000-000-0000 for verification. We’d be happy to help.
                  </div>
                  <hr /> 
                </div>
                <div>
                  <input type="checkbox" id="question6" name="q" className="questions" />
                  <div className="plus">+</div>
                  <label htmlFor="question6" className="question">
                    Can You Answer More Of My Questions?
                  </label>
                  <div className="answers">
                    Of course! We’re always happy to answer any questions you might have about Liberty Trust Group. Just send us your question online or call us at 000-000-0000 to speak with us personally.
                  </div>
                  <hr /> 
                </div>
              </div>   
              {/* row end */}
              {/* accordian end  */}
            </div>  

            {/* col end */}
            <div className="col-sm-5 col-xs-12 right-faq">  
              <h2 className="right-faq-h1 text-center"> Request a free, no obligation consultation.</h2>                
              <div className="row">
                <div className="col-sm-12 col-xs-12"> 
                  <BasicForm />

                </div>
              </div>
            </div>
          </div>
        </div>
      
          <PushDownSection>
          <Questions /> 
            <Footer />
          </PushDownSection>
      {/* <StyledComponent /> */}      

      </div>); 
}



export default WhyUs; 