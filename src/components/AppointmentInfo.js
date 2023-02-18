import React from "react";
const AppointmentInfoCard = (info) => {
  console.log(info);
  return (
    <div className="p-2 m-2">
      <div className="grid grid-cols-2 p-2 bg-white rounded">
        <div className="flex justify-around items-center ">
          <div className="  pr-2 ">
            <ul>
              <li className="text-2xl font-bold text-black my-2">
                {info.date}
              </li>
              <li>{info.time}</li>
            </ul>
          </div>
          <div className="w-60 text-center  border-r-2 border-l-2 px-5 border-r-gray-400 border-l-gray-400">
            <ul>
              <li>Treatment</li>
              <li className="text-xl ">{info.treatment}</li>
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="flex justify-around items-center px-3">
          <div className="w-52">
            <ul>
              <li>Dentist</li>
              <li className="text-xl">{info.dentist}</li>
            </ul>
          </div>
          <div className="w-48">
            <ul>
              <li>Nurse</li>
              <li className="text-xl">{info.nurse}</li>
            </ul>
          </div>
          <div className="flex text-blue-500 mr-2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <span>Note</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const AppointmentInfo = () => {
  const appointmentData = [
    {
      id: 1,  
      date: "26 Nov'19",
      time: "09:00 - 10:00",
      treatment: "Open Access",
      dentist: "Drg. Adam H.",
      nurse: "Jessicamila",
    },
    {
      id:2,
      date: "12 Nov'19",
      time: "09:00 - 10:00",
      treatment: "Open Access",
      dentist: "Drg. Adam H.",
      nurse: "Jessicamila",
    },
  ];
  return (
    <div className="text-gray-500">
      <div className="my-4 bg-gray-200 rounded">
        <ul className="p-2">
          <li className="inline mx-2">
            <button className="bg-white py-1 px-8 rounded">
              Upcoming Appointments
            </button>
          </li>
          <li className="inline mx-2">
            <button className="py-1 px-8 rounded">Past Appointments</button>
          </li>
          <li className="inline mx-2">
            <button className="py-1 px-8 rounded">Medical Records</button>
          </li>
        </ul>
      </div>

      <div className="bg-gray-200 rounded pb-2">
        <div className="flex justify-between p-4 my-4 border-b-2">
          <div className="text-gray-500">Root Canal Treatment</div>
          <div>
            <button className="py-1 px-4 rounded bg-white">
              Show Previous Treatments
            </button>
          </div>
        </div>

         
        {appointmentData.map((info) => {
          return <AppointmentInfoCard key={info.id} {...info} />;
        })}
         
      </div>
    </div>
  );
};
