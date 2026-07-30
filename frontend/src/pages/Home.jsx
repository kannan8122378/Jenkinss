import { Link } from "react-router-dom";

function Home(){

    return(

        <div>

            <h1>Book Your Ride in Seconds</h1>

            <p>Fast • Safe • Affordable</p>

            <Link to="/book">

                <button>

                    🚖 Book Now

                </button>

            </Link>

        </div>

    );

}

export default Home;
