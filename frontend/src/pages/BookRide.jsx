import { useState } from "react";

function BookRide() {

    const [pickup, setPickup] = useState("");
    const [drop, setDrop] = useState("");
    const [vehicle, setVehicle] = useState("Sedan");

    const bookRide = async (e) => {

        e.preventDefault();

        if (!pickup || !drop) {
            alert("Please fill all fields");
            return;
        }

        try {

            const response = await fetch("/api/book", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    pickup,
                    drop,
                    vehicle

                })

            });

            const data = await response.json();

            alert(data.message);

            setPickup("");
            setDrop("");
            setVehicle("Sedan");

        } catch (error) {

            console.log(error);

            alert("Booking Failed");

        }

    }

    return (

        <div className="container">

            <h1>Book Ride</h1>

            <form onSubmit={bookRide}>

                <label>Pickup</label>

                <input

                    type="text"

                    value={pickup}

                    onChange={(e)=>setPickup(e.target.value)}

                    placeholder="Enter Pickup"

                />

                <br /><br />

                <label>Destination</label>

                <input

                    type="text"

                    value={drop}

                    onChange={(e)=>setDrop(e.target.value)}

                    placeholder="Enter Destination"

                />

                <br /><br />

                <label>Vehicle</label>

                <select

                    value={vehicle}

                    onChange={(e)=>setVehicle(e.target.value)}

                >

                    <option>Sedan</option>

                    <option>SUV</option>

                    <option>Mini</option>

                    <option>Bike</option>

                </select>

                <br /><br />

                <button>

                    Book Ride

                </button>

            </form>

        </div>

    );

}

export default BookRide;
