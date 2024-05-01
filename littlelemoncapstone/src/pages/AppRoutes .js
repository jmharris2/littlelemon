import { Route, Routes } from 'react-router-dom';
import About from"./About";
import ConfirmedBooking from './ConfirmedBooking';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';
import Order from './Order';
import Reservation from './Reservation';

function AppRoutes (){
    return(
    <Routes>

      <Route  exact path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/reservation" element={<Reservation/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/ConfirmedBooking" element={<ConfirmedBooking/>} />



    </Routes>

    );
}
export default AppRoutes ;
