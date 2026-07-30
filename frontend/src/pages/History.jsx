import { useEffect, useState } from "react";

function History(){

    const [bookings,setBookings]=useState([]);

    useEffect(()=>{

        loadBookings();

    },[]);

    const loadBookings=async()=>{

        const res=await fetch("/api/bookings");

        const data=await res.json();

        setBookings(data);

    }

    return(

        <div>

            <h2>Booking History</h2>

            <table border="1">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Pickup</th>

                        <th>Destination</th>

                        <th>Vehicle</th>

                        <th>Date</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        bookings.map((booking)=>(

                            <tr key={booking.id}>

                                <td>{booking.id}</td>

                                <td>{booking.pickup}</td>

                                <td>{booking.drop_location}</td>

                                <td>{booking.vehicle}</td>

                                <td>{booking.created_at}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default History;
