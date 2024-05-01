import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import"../style/ConfirmedBooking.css";

function ConfirmedBooking( ){

  const location = useLocation();
  const { date, time ,guests,occasion } = location.state;

    return(
    <>
    <section className='page'>
    <Header/>
      <h2 className='conf-h'>Booking Confirmed!</h2>
      <div className='div-layer'>
      <div className="conf-date conf-all">
        <h3>Date</h3>
        <p>{date}</p>
      </div>
      <div className=" conf-time conf-all">
        <h3>Time</h3>
        <p>{time}</p>
      </div>
      <div className="conf-guests conf-all">
        <h3>Guests</h3>
        <p>{guests}</p>
      </div>
      <div className="conf-occasion conf-all">
        <h3>Occasion</h3>
        <p>{occasion}</p>
      </div>
      </div>

      <p className='con-th'>Thank you for your reservation.</p>

      </section>

    </>
    );
}
export default ConfirmedBooking;