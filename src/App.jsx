import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './App.css';

const mockData = [
  { id: 1, image: "car1.jpg", licensePlate: "ABC123", date: "2024-12-01", time: "14:30" },
  { id: 2, image: "car2.jpg", licensePlate: "XYZ789", date: "2024-12-01", time: "15:00" },
  { id: 3, image: "car3.jpg", licensePlate: "LMN456", date: "2024-12-02", time: "12:00" },
];

function App() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
  };
  const filteredData = mockData.filter(item => item.date === selectedDate);

  return (
    <div className="App">
      <h1>Red Light Violation Tracker</h1>
      <Calendar onChange={handleDateChange} />
      
      <div className="details">
        {selectedDate && (
          <>
            <h2>Violations on {selectedDate}</h2>
            {filteredData.length > 0 ? (
              filteredData.map(({ id, image, licensePlate, time }) => (
                <div key={id} className="card">
                  <img src={image} alt={`Car ${licensePlate}`} />
                  <p>License Plate: {licensePlate}</p>
                  <p>Time: {time}</p>
                </div>
              ))
            ) : (
              <p>No recorded.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
