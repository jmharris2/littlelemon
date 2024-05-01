import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import"../style/Reservation.css";


function Reservation(){
    return(
        <>
        <div className="page">
        <Header />
        <BookingForm />
        <Footer />
        </div>


        </>
);
}

export default Reservation;