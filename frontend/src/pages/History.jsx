import { useEffect,useState } from "react";

function History(){

    const [bookings,setBookings]=useState([]);

    useEffect(()=>{

        fetchBookings();

    },[]);

    const fetchBookings=async()=>{

        const res=await fetch("/api/bookings");

        const data=await res.json();

        setBookings(data);

    }

    return(

        <div className="container">

            <h1>Booking History</h1>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Pickup</th>

                        <th>Destination</th>

                        <th>Vehicle</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        bookings.map((item)=>(

                            <tr key={item.id}>

                                <td>{item.id}</td>

                                <td>{item.pickup}</td>

                                <td>{item.drop_location}</td>

                                <td>{item.vehicle}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default History;
