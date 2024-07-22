
// import { useState, useEffect } from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";
// import "./Details.css";

// const Details = () => {
//   const [event, setEvent] = useState(null);
//   const [tichOrg, setTickOrg] = useState(0); 
//   const [tichVip, setTickVip] = useState(0); 
//   const [tichOrgCount, setTickOrgCount] = useState(0); 
//   const [tichVipCount, setTickVipCount] = useState(0); 

//   useEffect(() => {
//     const fetchEventDetails = async () => {
//       try {
//         const response = await axios.get(`https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/events/{event_id_25}.json`);
        
//         if (response.data) {
//           const eventData = response.data;
//           setEvent(eventData);
          
//           // Set ticket availability state
//           if (eventData.tickets && eventData.tickets.ticket_id_49) {
//             setTickOrg(eventData.tickets.ticket_id_49.availability);
//           }
//           if (eventData.tickets && eventData.tickets.ticket_id_50) {
//             setTickVip(eventData.tickets.ticket_id_50.availability);
//           }
//         } else {
//           console.log("No data available");
//         }
//       } catch (error) {
//         alert(error.message);
//       }
//     };

//     fetchEventDetails();
//   }, []); 

//   const decrementOrginal = () => {
//     if (tichOrg > 0) {
//       setTickOrg(tichOrg - 1); // Decrease ticket availability by 1

//       axios.patch("https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/events/event_id_25/tickets/ticket_id_49.json", { availability: tichOrg - 1 });
//     }
//   };

//   const decrementVip = () => {
//     if (tichVip > 0) {
//       setTickVip(tichVip - 1); // Decrease ticket availability by 1

//       axios.patch("https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/events/event_id_25/tickets/ticket_id_50.json", { availability: tichVip - 1 });
//     }
//   };

//   return (
//     <div>
//       {event && (
//         <div>
//           <div className="imagOfDetailsCont">
//             {event.image && <img src={event.image} alt="Event" className="event-image" />}
//           </div>
//           <div className="titleOfDetails">
//             <h2 className="text-xl font-bold mb-2">{event.title}</h2>
//           </div>
          
//           <div className="allEventDetails">
//             <div className="detailsOfEvent">
//               <p className="text-gray-700"> {event.description}</p>
//               <div className="infoOfEvent">
//                 <pre className="moreInfoDetails text-gray-700">Category: <span class="valueOfInfo">{event.category}</span></pre>
//                 <pre className="moreInfoDetails text-gray-700">Date: <span class="valueOfInfo">{event.date}</span></pre>
//                 <pre className="moreInfoDetails text-gray-700">City: <span class="valueOfInfo">{event.city}</span></pre>
//               </div>
//             </div>
//             <div class="gpsDetails">
//                 <iframe
//                 class="frameOfGps"
//                   width="100%"
//                   height="200"
//                   frameBorder="0"
//                   scrolling="no"
//                   marginHeight="0"
//                   marginWidth="0"
//                   src={`https://maps.google.com/maps?q=${encodeURIComponent(event.city)}+(culture)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
//                   title="Event Location"
//                 >
//                   <a href={`https://www.google.com/maps?q=${encodeURIComponent(event.city)}+(culture)`}>View on Google Maps</a>
//                 </iframe>
//               </div>
           
//           </div>
         
          
//           {/* Ticket counters */}
//           <div class="ticketsCont">
//           <div class="tickets">
//             <div class="orginalTickets">
//             <img src={event.tickets.ticket_id_49.image} alt="Ticket 49" className="ticket-image" />
//             <p className="text-gray-700">Availability: <span className="valueTicket">{tichOrg}</span></p>
//             <p className="text-gray-700">Type: <span className="valueTicket">{event.tickets.ticket_id_49.type}</span></p>
//             <p className="text-gray-700">Price:<span className="valueTicket">{event.tickets.ticket_id_49.price}</span></p>
//             <div class="orgCount"> 
//             <button class="counterDetails" onClick={() => setTickOrgCount(tichOrgCount + 1)}>+</button>
//             <button class="counterDetails" onClick={() => setTickOrgCount(tichOrgCount - 1)}>-</button>
//             {tichOrgCount}
//           </div>

//             </div>
            
//             <div class="vipTickets">
//             <img src={event.tickets.ticket_id_50.image} alt="Ticket 50" className="ticket-image" />
//             <p className="text-gray-700">Availability: <span className="valueTicket">{tichVip}</span> </p>
//                   <p className="text-gray-700">Type: <span className="valueTicket">{event.tickets.ticket_id_50.type}</span></p>
//                   <p className="text-gray-700">Price: <span className="valueTicket">{event.tickets.ticket_id_50.price}</span> </p>
//             <div class="vipCount">
//             <button class="counterDetails" onClick={() => setTickVipCount(tichVipCount + 1)}>+</button>
//             <button class="counterDetails" onClick={() => setTickVipCount(tichVipCount - 1)}>-</button>
//             {tichVipCount}
//           </div>
//             </div>
//           </div>
//           <Link to="/checkout">
//             <button className="purchaseDetails">Purchase</button>
//           </Link>
//           </div>
        
//           {/* Render ticket details */}
//           {event.tickets && (
//             <div>
//               {/* Render details for ticket_id_49 */}
//               {event.tickets.ticket_id_49 && (
//                 <div>
//                   <p className="text-gray-700">Ticket 49 Availability: {tichOrg}</p>
//                   <button 
//                     onClick={decrementOrginal} 
//                     className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
//                   >
//                     Decrement Original
//                   </button>
                  
//                 </div>
//               )}

//               {/* Render details for ticket_id_50 */}
//               {event.tickets.ticket_id_50 && (
//                 <div>
//                   <p className="text-gray-700">Ticket 50 Availability: {tichVip}</p>
//                   <button 
//                     onClick={decrementVip} 
//                     className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
//                   >
//                     Decrement VIP
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Details;



// import { useState, useEffect } from "react";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const Details = () => {
//   const { eventId } = useParams(); // Get eventId from URL
//   const [event, setEvent] = useState(null);
//   const [tichOrg, setTickOrg] = useState(0); 
//   const [tichVip, setTickVip] = useState(0); 
//   const [tichOrgCount, setTickOrgCount] = useState(0); 
//   const [tichVipCount, setTickVipCount] = useState(0); 

//   useEffect(() => {
//     const fetchEventDetails = async () => {
//       try {
//         const response = await axios.get(`https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}.json`);
        
//         if (response.data) {
//           const event = response.data;
//           setEvent(event);
          
//           // Set ticket availability state
//           if (event.tickets && event.tickets.ticket_id_49) {
//             setTickOrg(event.tickets.ticket_id_49.availability);
//           }
//           if (event.tickets && event.tickets.ticket_id_50) {
//             setTickVip(event.tickets.ticket_id_50.availability);
//           }
//         } else {
//           console.log("No data available");
//         }
//       } catch (error) {
//         alert(error.message);
//       }
//     };

//     fetchEventDetails();

//   }, [eventId]); // Re-fetch data when eventId changes

//   const decrementOrginal = () => {
//     if (tichOrg > 0) {
//       setTickOrg(tichOrg - 1); // Decrease ticket availability by 1

//       axios.patch(`https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}/tickets/ticket_id_49.json`, { availability: tichOrg - 1 });
//     }
//   };

//   const decrementVip = () => {
//     if (tichVip > 0) {
//       setTickVip(tichVip - 1); // Decrease ticket availability by 1

//       axios.patch(`https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}/tickets/ticket_id_50.json`, { availability: tichVip - 1 });
//     }
//   };

//   return (
//     <div>
//       {event && (
//         <div>
//           <h2 className="text-xl font-bold mb-2">{event.title}</h2>
//           <p className="text-gray-700">Category: {event.category}</p>
//           <p className="text-gray-700">Description: {event.description}</p>
//           <p className="text-gray-700">Date: {event.date}</p>
//           <p className="text-gray-700">City: {event.city}</p>

//           {/* Google Maps iframe */}
//           <iframe
//             width="100%"
//             height="400"
//             frameBorder="0"
//             scrolling="no"
//             marginHeight="0"
//             marginWidth="0"
//             src={`https://maps.google.com/maps?q=${encodeURIComponent(event.city)}+(culture)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
//             title="Event Location"
//           >
//             <a href={`https://www.google.com/maps?q=${encodeURIComponent(event.city)}+(culture)`}>View on Google Maps</a>
//           </iframe>

//           {/* Ticket counters */}
//           <div>
//             <button onClick={() => setTickOrgCount(tichOrgCount + 1)}>+</button>
//             <button onClick={() => setTickOrgCount(tichOrgCount - 1)}>-</button>
//             {tichOrgCount}
//           </div>
//           <div>
//             <button onClick={() => setTickVipCount(tichVipCount + 1)}>+</button>
//             <button onClick={() => setTickVipCount(tichVipCount - 1)}>-</button>
//             {tichVipCount}
//           </div>

//           {/* Render ticket details */}
//           {event.tickets && (
//             <div>
//               {/* Render details for ticket_id_49 */}
//               {event.tickets.ticket_id_49 && (
//                 <div>
//                   <p className="text-gray-700">Ticket 49 Availability: {tichOrg}</p>
//                   <button 
//                     onClick={decrementOrginal} 
//                     className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
//                   >
//                     Decrement Original
//                   </button>
//                   <img src={event.tickets.ticket_id_49.image} alt="Ticket 49" className="ticket-image" />
//                   <p className="text-gray-700">Ticket 49 Type: {event.tickets.ticket_id_49.type}</p>
//                   <p className="text-gray-700">Ticket 49 Price: {event.tickets.ticket_id_49.price}</p>
//                 </div>
//               )}

//               {/* Render details for ticket_id_50 */}
//               {event.tickets.ticket_id_50 && (
//                 <div>
//                   <p className="text-gray-700">Ticket 50 Availability: {tichVip}</p>
//                   <button 
//                     onClick={decrementVip} 
//                     className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
//                   >
//                     Decrement VIP
//                   </button>
//                   <img src={event.tickets.ticket_id_50.image} alt="Ticket 50" className="ticket-image" />
//                   <p className="text-gray-700">Ticket 50 Type: {event.tickets.ticket_id_50.type}</p>
//                   <p className="text-gray-700">Ticket 50 Price: {event.tickets.ticket_id_50.price}</p>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Event image */}
//           {event.image && (
//             <div>
//               <img src={event.image} alt="Event" className="event-image" />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Details;






import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; 
import "./Details.css";
// const eventId = sessionStorage.getItem("id")
import { useParams } from 'react-router-dom';

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const Details = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams(); // Get eventId from URL
  const [tichOrg, setTickOrg] = useState(0); 
  const [tichVip, setTickVip] = useState(0); 
  const [tichOrgCount, setTickOrgCount] = useState(0); 
  const [tichVipCount, setTickVipCount] = useState(0); 
  const [totalPrice, setTotalPrice] = useState(0); 
  console.log(eventId)
  const id = eventId.split("_")[2];
  const ticketOrgId = id*2-1;
  const ticketVipId = id*2;
  const navigate = useNavigate();
  // useEffect(() => {
    const fetchEventDetails = async () => {
      // try {
         const response = await axios.get(`https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}.json`);
        // if (response.data) {
          setEvent(response.data);
          
          // Set ticket availability state
          // if (event.tickets && event.tickets[`ticket_id_${ticketOrgId}`]) {
            setTickOrg(event.tickets[`ticket_id_${ticketOrgId}`].availability);
            
          // }
          // if (event.tickets && event.tickets[`ticket_id_${ticketVipId}`]) {
            setTickVip(event.tickets[`ticket_id_${ticketVipId}`].availability);
          // }
        } 
        // else {
        //   console.log("No data available");
        // }
      // }
      //  catch (error) {
      //   alert("test");
      // }
    // };

    fetchEventDetails();
  // }, []); 
  

  const plusOrg = () => {
    if (tichOrgCount < tichOrg) {
      setTickOrgCount(tichOrgCount + 1);
    }
    else{
      alert("No more tickets are available")
    }
  };

  const minusOrg = () => {
    if (tichOrgCount > 0) {
      setTickOrgCount(tichOrgCount - 1);
    }
    else{
      alert("No Tickets")
    }
  };

  const plusVip = () => {
    if (tichVipCount < tichVip) {
      setTickVipCount(tichVipCount + 1);
    }
    else{
      alert("No more tickets are available")
    }
  };

  const minusVip = () => {
    if (tichVipCount > 0) {
      setTickVipCount(tichVipCount - 1);
    }
    else{
      alert("No Tickets")
    }
  };
  

  const handlePurchase = () => {
    const totalPrice = (event.tickets[`ticket_id_${ticketOrgId}`].price * tichOrgCount) + (event.tickets[`ticket_id_${ticketVipId}`].price * tichVipCount);
    setTotalPrice(totalPrice);
    

    // Save to sessionStorage
    sessionStorage.setItem('totalPrice', totalPrice);
    sessionStorage.setItem('orgCount', tichOrgCount);
    sessionStorage.setItem('vipCount', tichVipCount);
    sessionStorage.setItem('orgExist', tichOrg);
    sessionStorage.setItem('vipExist', tichVip);
    navigate("/checkout");
  };
  return (
    <div>
      <NavBar/>
      {event && (
        <div className="detailsDetails">
          <div className="titleOfDetails">
            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
          </div>

          <div className="allEventDetails">
            <div className="imagOfDetailsCont">
              {event.image && <img src={event.image} alt="Event" className="event-image" />}
            </div>

            <div className="moreDetails">
              <div className="detailsOfEvent">
                <div className="infoOfEvent">
                  <pre className="moreInfoDetails text-gray-700">Category: <span className="valueOfInfo">{event.category}</span></pre>
                  <pre className="moreInfoDetails text-gray-700">Date: <span className="valueOfInfo">{event.date}</span></pre>
                  <pre className="moreInfoDetails text-gray-700">City: <span className="valueOfInfo">{event.city}</span></pre>
                </div>
                <div className="gpsDetails">
                  <iframe
                    className="frameOfGps"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(event.city)}+(culture)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                    title="Event Location"
                  >
                    <a href={`https://www.google.com/maps?q=${encodeURIComponent(event.city)}+(culture)`}>View on Google Maps</a>
                  </iframe>
                </div>
                <p className="text-gray-700">{event.description}</p>
                
              </div>

              <div className="puchaseDetails">
            
                <div className="ticketsCont">
                  <div className="tickets">
                    <div className="orginalTickets">
                      {/* <img src={event.tickets[ticketOrgId].image} alt="Ticket 49" className="ticket-image" /> */}
                      <p className="text-gray-700">Availability: <span className="valueTicket">{tichOrg}</span></p>
                      <p className="text-gray-700">Type: <span className="valueTicket">{event.tickets[`ticket_id_${ticketOrgId}`].type}</span></p>
                      <p className="text-gray-700">Price: <span className="valueTicket">{event.tickets[`ticket_id_${ticketOrgId}`].price}</span></p>
                      <div className="orgCount"> 
                        <button className="counterDetails" onClick={plusOrg}>+</button>
                        <span className="mx-2">{tichOrgCount}</span>
                        <button className="counterDetails" onClick={minusOrg}>-</button>
                        
                      </div>
                    </div>
                    
                    <div className="vipTickets">
                      {/* <img src={event.tickets.ticket_id_50.image} alt="Ticket 50" className="ticket-image" /> */}
                      <p className="text-gray-700">Availability: <span className="valueTicket">{tichVip}</span> </p>
                      <p className="text-gray-700">Type: <span className="valueTicket">{event.tickets[`ticket_id_${ticketVipId}`].type}</span></p>
                      <p className="text-gray-700">Price: <span className="valueTicket">{event.tickets[`ticket_id_${ticketVipId}`].price}</span> </p>
                      <div className="vipCount">
                        <button className="counterDetails" onClick={plusVip}>+</button>
                        <span className="mx-2">{tichVipCount}</span>
                        <button className="counterDetails" onClick={minusVip}>-</button>
                        
                      </div>
                    </div>
                  </div>

                  <div className="purshaseDetails">
                    <button className="purchaseDetails" onClick={handlePurchase}>Purchase</button>
                    <div className="text-gray-700 mt-4">Total Price: <span className="font-bold">{(event.tickets[`ticket_id_${ticketOrgId}`].price * tichOrgCount) + (event.tickets[`ticket_id_${ticketVipId}`].price * tichVipCount)}</span></div>
                  </div>
                </div>

              
              </div>

            </div>
          </div>

        </div>
      )}
      <Footer />
    </div>
  );
};

export default Details;