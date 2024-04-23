import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
function App() {
    const [ SelectedDate, setSelectedDate] = useState(new Date()); 
    const [events, setEvents] = useState([
        { title: 'Designer Conference', date:new Date(2024, 3, 18), time: '10:30 AM', description: '83 Wilderman Mission'},
        {title: 'National level Project Conference', date:new Date(2024, 3, 18), time:'10:30 AM', description:'TECH EXPO 2024', mode:'Hybrid Mode'},
        {title: 'Event 2', date:new Date(2024, 3, 17), time: '2:00 PM',  description: 'Description 2'},
    ]);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const filteredEvents = events.filter(event =>
    event.date.toDateString() === SelectedDate.toDateString()
);

   
  return (
    <div className='contener'>
        <div className='cal'>
        <FontAwesomeIcon icon={faArrowLeft} className='icon' />
            <h1>Calendar</h1>
         <FontAwesomeIcon icon={faPlus}  className='icon' /> 
        </div>
        <div className='days'>
         <Calendar className={Calendar} onChange={handleDateChange} value={SelectedDate} />
        </div>
        <div className='EventIcon'>
        <h2 className='UpEvent'>Upcoming Events</h2>
        </div>
            {filteredEvents.map(event => (
                <div className='ev' key={event.title}>
                     <div className='events'>
                        <div className='event'>
                            <Link to={`/project/${(event.title)}`}>
                                <div className='t'>
                                    <div className='dot'></div>
                                    <p>{event.time}</p>
                                </div>
                                <h1>{event.title}</h1>
                                <h2>{event.description}</h2>
                                <h3>{event.mode}</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
    </div>
          
  );
}

export default App;
