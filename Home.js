import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import cartoon from '../../assets/cartoon.jpeg';
import MediaCard from '../Cards/MediaCard';
import './Home.css';
import SimpleCard from '../Cards/SimpleCard';
import hyd1 from '../../assets/hyd1.jpeg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const Home = () => {
    return (
        <div>
            <div className="container-fluid">
        


                <div className="container-fluid">
                <nav>
                <ul  className="nav-item">
                <li> 
                <div className="logo">logooo</div></li>
                <div className="fluid">
                <ul  className="nav-items">
                <li >Home<li><HomeIcon/></li></li>
                <li>About<li><InfoIcon/></li></li>
                <li>How it Works<li><WorkIcon/></li></li>
                <li>Investments<li><MonetizationOnIcon/></li></li>
                <li>Contact<li><ContactMailIcon/></li></li>
                </ul>
                </div>
                <div className="container-fluid">
                <ul className="login" >
                <li  className="log"><div className="icon"><ExitToAppIcon/>Login</div> </li>
                </ul>
                </div>
                </ul>
                </nav>
                </div>
           
           <div className="container-fluid">
           <div className="container">
           <div className="img1">
           <div className="inner-container">
           <h1><p>wikiHyd</p>is india's first<br/>Real Estate Counseling Firm </h1>
           <p>Say No to Blind INvestments</p>
           </div>
           </div>
           </div>
           </div>



 <div className="fluid-container">
 <div className="work-container">
 <table>
 <tr className="row">
 <th><div className="sub"><p>scientific subject</p></div></th>
 <th><div className="work">
 <tr><h1>How it Works</h1></tr>
 <tr><div className="fluid-container">
 <div className="container-one">
 <MediaCard/>
 </div>
 </div>
 </tr>
 </div></th>
 </tr>
 </table>
 </div>
 </div>
   
                     <div className="fluid-container">
                     <div className="service">
                     <h1>Services</h1>
                      </div>
                      <div className="service-list">
                      <table>
                      <tr className="list">
                      <th className="one">Free Counseling</th>
                      <th className="one">Personalised Counseling</th>
                      <th className="one">Analysis Services</th>
                      <th className="one">Verification Services</th>
                      <th className="one">Delicate Services</th>
                      </tr>
                      </table>
                      </div>
                      </div>


<div className="normal">
    <div className="container">
        <table>
            <tr>
                <th><img src={hyd1} alt="cartoon"></img></th>
                <th><table className="four"><tr>
                <th className="one"><p>Clients</p><h6>100+</h6><p>Investors</p><h6>50+</h6></th> 
                   <th className="two"><p>Want to know more about real estate?<br/>Our Experts are always at your service</p>
                    <button className="three"><p>Book Counselling<ArrowForwardIcon/></p></button></th> 
                    </tr>  </table>
                     </th>
            </tr>
        </table>
    </div>
</div>






     
     <section  className="analytic">
      <div className="container">
      <h2>Analytical Videos</h2>
      <video width="400" controls>
      <source src="images/video.mp4" type="video/mp4"></source>
      <source src="images/video.ogg" type="video/ogg"></source>
       Your browser does not support HTML video.
      </video>
      </div>
      </section>
   




<section className="customer">
   
<h2>Voice Of Our Customer</h2>

    <div className="customer-container">
<div className="imgheader">
    <table>
        <tr >
            <th>  <img src={cartoon} alt="cartoon"></img></th>
            <th className="name"><h2>Ravindra</h2><h3>IT consultant</h3></th>
        </tr>
    </table>
  

</div>
<div className="passage">
    <p>  My Name is Ravindra by profession am Software.in 2012,i am looking for investment opportunities for around 10 lakhs along with my office colleagues at that point of time explored lot of options.</p>
</div>

    </div>
    
</section>







      <footer>
      <div className="container">
          
        <div className="row">
        <table>
          <tr>
              <th>
          <div className="col-6">
            <h3>Our Address</h3>
            <p>
              301, Jasmine<br/>
              Apartments, <br/>
              Hyderabad, Telangana,<br/>
              500075
            </p>
          </div>
          </th>
          <th>
          <div className="col-6">
            <div className="contact-section">
                <h3>Contact Us</h3>
                <ul className="social-links">
                  <li>
                    <a href="">
                     <FacebookIcon/>
                    </a>
                  </li>
                  <li>
                    <a href="">
                     <TwitterIcon/>
                    </a>
                  </li>
                  <li>
                    <a href="">
                     <WhatsAppIcon/>
                    </a>
                  </li>
                </ul>
            </div>
          
        </div>
        </th>
        </tr>
        </table>
      </div>
      </div>
    </footer>





 </div>
</div>
           
           
        
    )
}
