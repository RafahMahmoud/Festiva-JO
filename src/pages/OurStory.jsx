// import React, { useState } from "react";

// const OurStory = () => {
//   const [active, setActive] = useState(0);

//   return (
//     // <section id="js-toolkit" className="container py-16">
//     //   <div className="pb-4 text-center">
//     //     <h2 className="text-orange">How to sell your event tickets online</h2>
//     //     <span className="text-lg text-blue-darker">
//     //       Promote, Sell and Manage any event, in any venue
//     //     </span>
//     //   </div>
//     //   <div className="flex items-center mb-8 -mx-4">
//     //     <div className="justify-end hidden w-1/6 px-4 md:flex">
//     //       <button
//     //         className="py-4 focus:outline-none"
//     //         aria-label="Previous"
//     //         onClick={() => setActive(active === 0 ? 3 : active - 1)}
//     //       >
//     //         <img
//     //           src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-left.svg"
//     //           alt=""
//     //           aria-hidden="true"
//     //         />
//     //       </button>
//     //     </div>
//     //     <button
//     //       className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
//     //         active === 0 ? "opacity-100" : ""
//     //       }`}
//     //       aria-label="Create"
//     //       onClick={() => setActive(0)}
//     //     >
//     //       <img
//     //         className="h-32"
//     //         src="https://cdn.ticketsource.co.uk/brochure-site/images/lightbulb.svg"
//     //         alt="A lightbulb"
//     //         loading="lazy"
//     //       />
//     //       <span className="md:mt-4">Create</span>
//     //     </button>
//     //     <button
//     //       className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
//     //         active === 1 ? "opacity-100" : ""
//     //       }`}
//     //       aria-label="Promote"
//     //       onClick={() => setActive(1)}
//     //     >
//     //       <img
//     //         className="h-32"
//     //         src="https://cdn.ticketsource.co.uk/brochure-site/images/megaphone.svg"
//     //         alt="A megaphone"
//     //         loading="lazy"
//     //       />
//     //       <span className="md:mt-4">Promote</span>
//     //     </button>
//     //     <button
//     //       className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
//     //         active === 2 ? "opacity-100" : ""
//     //       }`}
//     //       aria-label="Sell"
//     //       onClick={() => setActive(2)}
//     //     >
//     //       <img
//     //         className="h-32"
//     //         src="https://cdn.ticketsource.co.uk/brochure-site/images/ticket-blank.svg"
//     //         alt="A blank ticket"
//     //         loading="lazy"
//     //       />
//     //       <span className="md:mt-4">Sell</span>
//     //     </button>
//     //     <button
//     //       className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
//     //         active === 3 ? "opacity-100" : ""
//     //       }`}
//     //       aria-label="Manage"
//     //       onClick={() => setActive(3)}
//     //     >
//     //       <img
//     //         className="h-32"
//     //         src="https://cdn.ticketsource.co.uk/brochure-site/images/cog.svg"
//     //         alt="A cog"
//     //         loading="lazy"
//     //       />
//     //       <span className="md:mt-4">Manage</span>
//     //     </button>
//     //     <div className="hidden w-1/6 px-4 md:flex">
//     //       <button
//     //         className="py-4 focus:outline-none"
//     //         aria-label="Next"
//     //         onClick={() => setActive(active === 3 ? 0 : active + 1)}
//     //       >
//     //         <img
//     //           src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-right.svg"
//     //           alt=""
//     //           aria-hidden="true"
//     //           loading="lazy"
//     //         />
//     //       </button>
//     //     </div>
//     //   </div>
//     //   {active === 0 && (
//     //     <div className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16">
//     //       <div className="flex justify-around md:flex-1">
//     //         <img
//     //           className="min-w-0 max-h-112"
//     //           src="https://cdn.ticketsource.co.uk/brochure-site/images/seating-plan.png"
//     //           alt="Seating plan and listing"
//     //           loading="lazy"
//     //         />
//     //       </div>
//     //       <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
//     //         <h3 className="text-xl font-normal text-blue-darker">
//     //           Create and customise your event
//     //         </h3>
//     //         <p>
//     //           Set up listings and an online box office for any event in any
//     //           venue in minutes. Whether you offer allocated seating or general
//     //           admission tickets, our free, easy to use ticketing system gives
//     //           you complete control of all aspects of your event listings online
//     //           24/7.
//     //         </p>
//     //         <ul className="orange-list">
//     //           <li>List your event online for free in minutes</li>
//     //           <li>Customise your ticket shop with your own logo and colours</li>
//     //           <li>Use our interactive venue seating plan designer</li>
//     //           <li>Manage multiple account users with access permissions</li>
//     //         </ul>
//     //         <a href="/signup" className="btn btn-orange">
//     //           Start creating
//     //         </a>
//     //       </div>
//     //     </div>
//     //   )}
//     //   {active === 1 && (
//     //     <div
//     //       className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16"
//     //       style={{ display: active === 1 ? "flex" : "none" }}
//     //     >
//     //       <div className="flex justify-around md:flex-1">
//     //         <img
//     //           className="min-w-0 max-h-112"
//     //           src="https://cdn.ticketsource.co.uk/brochure-site/images/mobile-listing-mailchimp-brevo.png"
//     //           alt="Two mobile phones with event listings, Mailchimp and Brevo"
//     //           loading="lazy"
//     //         />
//     //       </div>
//     //       <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
//     //         <h3 className="text-xl font-normal text-blue-darker">
//     //           Publish and promote your event
//     //         </h3>
//     //         <p>
//     //           TicketSource is packed with tools to make the most of your digital
//     //           marketing opportunities. Take advantage of our automated social
//     //           media sharing, early bird price categories, unlimited discount
//     //           codes, MailChimp and Brevo (formerly Sendinblue) integration and
//     //           customer referral reports.
//     //         </p>
//     //         <ul className="orange-list">
//     //           <li>Promote your event with "book now" links</li>
//     //           <li>Use our Facebook app for better social media promotion</li>
//     //           <li>Integrate MailChimp or Brevo for easier email marketing</li>
//     //           <li>
//     //             Utilise unlimited price categories and promo discount codes
//     //           </li>
//     //         </ul>
//     //         <a href="/signup" className="btn btn-orange">
//     //           Start promoting
//     //         </a>
//     //       </div>
//     //     </div>
//     //   )}
//     //   {active === 2 && (
//     //     <div
//     //       className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16"
//     //       style={{ display: active === 2 ? "flex" : "none" }}
//     //     >
//     //       <div className="flex justify-around md:flex-1">
//     //         <img
//     //           className="min-w-0 max-h-112"
//     //           src="https://cdn.ticketsource.co.uk/brochure-site/images/responsive-listings.png"
//     //           alt="Listings pages on desktop and mobile"
//     //           loading="lazy"
//     //         />
//     //       </div>
//     //       <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
//     //         <h3 className="text-xl font-normal text-blue-darker">
//     //           Start selling tickets online
//     //         </h3>
//     //         <p>
//     //           Our free event ticketing platform enables you to sell tickets
//     //           online and record payments in person with a range of ticket
//     //           formats available. A single inventory seamlessly integrates your
//     //           online and in-house ticketing, so overbooking becomes impossible.
//     //         </p>
//     //         <ul className="orange-list">
//     //           <li>Easily embed TicketSource in your site or Facebook page</li>
//     //           <li>Record in-house bookings for face-to-face payments</li>
//     //           <li>Produce etickets, mobile tickets and thermal tickets</li>
//     //           <li>Outsource your telephone bookings to our in-house team</li>
//     //         </ul>
//     //         <a href="/signup" className="btn btn-orange">
//     //           Start selling
//     //         </a>
//     //       </div>
//     //     </div>
//     //   )}
//     //   {active === 3 && (
//     //     <div
//     //       className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16"
//     //       style={{ display: active === 3 ? "flex" : "none" }}
//     //     >
//     //       <div className="flex justify-around md:flex-1">
//     //         <img
//     //           className="min-w-0 max-h-112"
//     //           src="https://cdn.ticketsource.co.uk/brochure-site/images/mobile-scanning-ticket.png"
//     //           alt="A mobile phone scanning a ticket qr code"
//     //           loading="lazy"
//     //         />
//     //       </div>
//     //       <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
//     //         <h3 className="text-xl font-normal text-blue-darker">
//     //           Manage your audience
//     //         </h3>
//     //         <p>
//     //           Whether you just want a printed guest list or prefer to automate
//     //           ticket validation with barcode scanners, we offer a range of
//     //           registration and audience management solutions, as well as reports
//     //           to simplify your accounting and venue management.
//     //         </p>
//     //         <ul className="orange-list">
//     //           <li>Print a door list or use scanners for ticket validation</li>
//     //           <li>Ticket scanning app for iOS and Android devices</li>
//     //           <li>Track conversions with Google Analytics integration</li>
//     //           <li>Analysis of income in sales reports for easy accounting</li>
//     //         </ul>
//     //         <a href="/signup" className="btn btn-orange">
//     //           Start managing
//     //         </a>
//     //       </div>
//     //     </div>
//     //   )}
//     //   <div className="flex md:hidden justify-evenly">
//     //     <button
//     //       className="py-4 focus:outline-none"
//     //       aria-label="Previous"
//     //       onClick={() => setActive(active === 0 ? 3 : active - 1)}
//     //     >
//     //       <img
//     //         src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-left.svg"
//     //         alt=""
//     //         aria-hidden="true"
//     //         loading="lazy"
//     //       />
//     //     </button>
//     //     <button
//     //       className="py-4 focus:outline-none"
//     //       aria-label="Next"
//     //       onClick={() => setActive(active === 3 ? 0 : active + 1)}
//     //     >
//     //       <img
//     //         src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-right.svg"
//     //         alt=""
//     //         aria-hidden="true"
//     //         loading="lazy"
//     //       />
//     //     </button>
//     //   </div>
//     // </section>
// <></>
//   );
// };

// export default OurStory;



import './OurStory.css';
import topCenterImg from '../assets/img/24.svg';
import s26Img from '../assets/img/s26.svg';
import s27Img from '../assets/img/s27.svg';
import s28Img from '../assets/img/s28.svg';
import s30Img from '../assets/img/s30.svg';
import s29Img from '../assets/img/s29.svg';

import logo from '../assets/img/logo2 (1).svg'
import logo2 from '../assets/img/logo2 (2).svg'
import areag from '../assets/img/WhatsApp_Image_2024-07-22_at_10.37.21_AM.jpeg'
import forat from '../assets/img/forat2.svg'
import duaa from '../assets/img/duaa.svg'
import rami from '../assets/img/rami.svg'
import malek from '../assets/img/malek.svg'
import rafah from '../assets/img/rafah.jpg'
 import NavBar from '../components/NavBar';
 import Footer from '../components/Footer';

const OurStory = () => {
  return (
    <div>
      <NavBar/>
    <div className='pg-page' >
      <div className="top-center">
        <img src={topCenterImg} alt="Top Center Image" />
      </div>
      <div className="hero-section">
        <div className="video-container">
          <video controls>
            {/* <source src={videoSrc} type="video/mp4" /> */}
            متصفحك لا يدعم عرض الفيديو.
          </video>
        </div>
      </div>
      <div className="px-4 py-5 my-5 text-center" style={{ backgroundImage: `url(${s26Img})` }}>
  <h1 className="mb-4 text-4xl tracking-tight font-bold text-red1 dark:text-white mt-16 lg:mt-32">Festiva Jordan</h1>
  <div className="mx-auto lg:w-1/2" style={{ backgroundImage: `url(${s27Img})` }}>
    <p className="mb-4 text-2xl lg:text-4xl tracking-tight text-gray-600 dark:text-white mt-4 lg:mt-8" style={{ color: '#704638' }}>
      Celebrating Jordan, One Ticket at a Time
    </p>
  </div>
</div>

      {/* //map
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5" style={{ marginLeft: '5%' }}>
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={s28Img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">At Festiva Jordan</h1>
          <p className="lead" style={{ color: '#C80036' }}>our mission is to provide the best festival experiences in Jordan. We are dedicated to making ticket booking for a wide range of events and festivals easy and enjoyable. We strive for the highest levels of quality and service to ensure that every event is an unforgettable experience.</p>
        </div>
      </div> */} 
   
    <div className="container mx-auto mt-12">
  <div className="flex flex-col lg:flex-row-reverse items-center gap-5 py-5">
    <div className="w-full lg:w-1/2">
      <img 
        src={s28Img} 
        className="w-full h-auto object-cover" 
        alt="Festiva Jordan" 
        loading="lazy" 
      />
    </div>
    <div className="w-full lg:w-1/2 lg:pl-10">
      <h1 className="text-4xl font-bold leading-tight mb-3 text-red1">At Festiva Jordan</h1>
      <p className="text-xl lg:text-2xl text-[#704638] lg:leading-relaxed">
        Our mission is to provide the best festival experiences in Jordan. We are dedicated to making ticket booking for a wide range of events and festivals easy and enjoyable. We strive for the highest levels of quality and service to ensure that every event is an unforgettable experience.
      </p>
    </div>
  </div>
</div>



    
       <div>
       <h2 className="mb-4 text-red1 text-4xl tracking-tight font-extrabold  dark:text-white"  style={{ textAlign: 'center', marginBottom: '5%'}}>
      Our Values
      </h2>
      <div className="card-group">
        <div className="cards">
          <img src={s30Img} alt="Integrity Icon" className="card-img" />
        </div>
        <div className="cards">
          <img src={s29Img} alt="..." className="card-img" />
        </div>
      </div>
    </div>
   
      <section className="bg-customBackground dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-red1 dark:text-white">
      Our partners
      </h2>
      <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
      
      </p>
    </div>
    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <a href="./">
          <img
            className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
            src={logo2}
            alt="Bonnie Avatar"
          />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
             Jordanian Ministry of Culture
          </h3>
          <p>The government body responsible for organizing and supporting cultural and artistic events in Jordan.</p>
         
        </div>
      </div>
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
            src={logo}
            alt="Jese Avatar"
          />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Jordan Tourism Board
          </h3>
          <p >
          Promotes tourism in Jordan and organizes events that highlight the country's cultural and natural heritage.
          </p>
          
        </div>
      </div>
    </div>
  </div>
</section>

    

<div>

<section className="bg-custom-bg dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-red1 dark:text-white">
        Our team
      </h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
      Our dedicated team is the heart of our success
      </p>
    </div>
    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src={areag} 
          alt="Bonnie Avatar"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Areej Abumuhfouz</a>
        </h3>
        <p>Scrum master</p>
       
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src={rafah}
          alt="Helene Avatar"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Rafah Mahmoud</a>
        </h3>
        <p>Product owner</p>

      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src={malek}
          alt="Jese Avatar"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Malek Shehadeh</a>
        </h3>
        <p>QA</p>
        
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src={rami}
          alt="Joseph Avatar"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Rami Ghazzawi</a>
        </h3>
        <p>Programmer</p>
        
       
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src={forat}
          alt="Sofia Avatar"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Forat</a>
        </h3>
        <p>Programmer</p>

      </div>
      <div className="text-center text-gray-500 dark:text-gray-400" >
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src={duaa}
          alt="Leslie Avatar"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Dua'a Khamis</a>
        </h3>
        <p>Programmer</p>

      </div>
    </div>
  </div>
</section>


</div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default OurStory;
