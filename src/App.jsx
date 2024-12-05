// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
// import './App.css';

// const mockData = [
//   { id: 1, image: "car1.jpg", licensePlate: "ABC123", date: "2024-12-01", time: "14:30" },
//   { id: 2, image: "car2.jpg", licensePlate: "XYZ789", date: "2024-12-01", time: "15:00" },
//   { id: 3, image: "car3.jpg", licensePlate: "LMN456", date: "2024-12-02", time: "12:00" },
//   { id: 4, image: "car4.jpg", licensePlate: "DEF234", date: "2024-12-02", time: "16:45" },
//   { id: 5, image: "car5.jpg", licensePlate: "GHI567", date: "2024-12-03", time: "10:15" },
// ];

// const App = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     const formattedDate = date.toISOString().split("T")[0];
//     setSelectedDate(formattedDate);
//   };

//   const filteredData = mockData.filter(item => item.date === selectedDate);

//   // const getTileContent = ({ date }) => {
//   //   const formattedDate = date.toISOString().split("T")[0];
//   //   const count = mockData.filter(item => item.date === formattedDate).length;
//   //   return count > 0 ? <div className="text-xs text-red-600 mt-1">{count} violations</div> : null;
//   // };
//   const getTileContent = ({ date }) => {
//     const formattedDate = date.toISOString().split("T")[0];
//     const count = mockData.filter(item => item.date === formattedDate).length;
    
//     return count > 0 ? (
//       <div className="absolute top-0 right-0 text-xs text-red-600 font-semibold bg-white px-2 py-1 rounded-full z-10">
//         {count}
//       </div>
//     ) : null;
//   };


//   return (
//     <div className="App font-sans p-5 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Traffic Light Violation Tracker</h1>
//       <div className="flex justify-center mb-8">
//         <Calendar
//           onChange={handleDateChange}
//           tileContent={getTileContent}
//           className="react-calendar shadow-md rounded-lg bg-white"
//           tileClassName="relative flex items-center justify-center h-16 w-16 text-lg"
//         />
//       </div>

//       <div className="details">
//         {selectedDate && (
//           <>
//             <h2 className="text-xl font-semibold mb-6 text-center text-gray-700">
//               Violations on {selectedDate}
//             </h2>
//             {filteredData.length > 0 ? (
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
//               {filteredData.map(({ id, image, licensePlate, time }) => (
//                 <div
//                   key={id}
//                   className="card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
//                 >
//                   <div className="relative">
//                     <img
//                       src={image}
//                       alt={`Car ${licensePlate}`}
//                       className="w-full h-56 object-cover"
//                     />
//                     <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white text-sm px-2 py-1">
//                       Violation
//                     </div>
//                   </div>

//                   <div className="p-4">
//                     <p className="text-lg text-gray-800 font-semibold mb-2">License Plate: {licensePlate}</p>
//                     <p className="text-gray-600">Time: {time}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             ) : (
//               <p className="text-center text-gray-500">No recorded.</p>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './App.css';

const mockData = [
  { id: 1, image: "car1.jpg", licensePlate: "ABC123", date: "2024-12-01", time: "14:30" },
  { id: 2, image: "car2.jpg", licensePlate: "XYZ789", date: "2024-12-01", time: "15:00" },
  { id: 3, image: "car3.jpg", licensePlate: "LMN456", date: "2024-12-02", time: "12:00" },
  { id: 4, image: "car4.jpg", licensePlate: "DEF234", date: "2024-12-02", time: "16:45" },
  { id: 5, image: "car5.jpg", licensePlate: "GHI567", date: "2024-12-03", time: "10:15" },
];

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); 

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
  };

  const filteredData = mockData.filter(item => item.date === selectedDate);

  const getTileContent = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    const count = mockData.filter(item => item.date === formattedDate).length;
    
    return count > 0 ? (
      <div className="absolute top-0 right-0 text-xs text-white font-semibold bg-red-600 px-2 py-1 rounded-full z-10">
        {count}
      </div>
    ) : null;
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); 
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App font-sans p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Traffic Light Violation Tracker</h1>
      <div className="flex justify-center mb-8">
        <Calendar
          onChange={handleDateChange}
          tileContent={getTileContent}
          className="react-calendar shadow-md rounded-lg bg-white"
          tileClassName="relative flex items-center justify-center h-16 w-16 text-lg"
        />
      </div>

      <div className="details">
        {selectedDate && (
          <>
            <h2 className="text-xl font-semibold mb-6 text-center text-gray-700">
              Violations on {selectedDate}
            </h2>
            {filteredData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                {filteredData.map(({ id, image, licensePlate, time }) => (
                  <div
                    key={id}
                    className="card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="relative">
                      <img
                        src={image}
                        alt={`Car ${licensePlate}`}
                        className="w-full h-56 object-cover cursor-pointer"
                        onClick={() => handleImageClick(image)} 
                      />
                      {/* <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white text-sm px-2 py-1">
                        Violation
                      </div> */}
                    </div>

                    <div className="p-4">
                      <p className="text-lg text-gray-800 font-semibold mb-2">License Plate: {licensePlate}</p>
                      <p className="text-gray-600">Time: {time}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No recorded</p>
            )}
          </>
        )}
      </div>

      {/* กดขยายรูป */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
          <div className="relative max-w-full max-h-full p-4">
            <img
              src={selectedImage}
              alt="Selected violation"
              className="max-w-screen-lg max-h-screen object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white text-black rounded-full p-3 text-[15px] hover:bg-gray-300 focus:outline-none"
            >
              X
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default App;
