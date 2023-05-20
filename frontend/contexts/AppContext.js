import { createContext, useState } from 'react';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [testimonials, setTestiminials] = useState([]);
  const [newsGlobal, setNewsGlobal] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [reservationsDates, setReservationsDates] = useState([]);
  const [showMessageModal, setShowMessageModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        testimonials,
        setTestiminials,
        newsGlobal,
        setNewsGlobal,
        reservations,
        setReservations,
        reservationsDates,
        setReservationsDates,
        showMessageModal,
        setShowMessageModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider };
export default AppContext;
