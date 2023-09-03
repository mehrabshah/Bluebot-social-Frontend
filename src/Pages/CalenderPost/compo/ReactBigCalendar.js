import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {

  const [eventsData, setEventsData] = useState(events);
  const user = localStorage.getItem("UserId");
  const [posts, setPosts] = useState([]);
    
  const getAllPosts = async () => {
    const res = await axios.get(`http://localhost:8000/post/getAllPost/${user}`);
    if(res){
      setPosts(res.data);
    }  
  }

  useEffect(() => {
    getAllPosts()
  }, [user])

  const makeEvent = () => {
    if(posts?.length){
      const newPosts = posts?.map(post => {
        return {
          id: post._id,
          title: post.text1,
          allDay: true,
          start: post.date,
          end: post.date
        }
      })

      return newPosts;
    }
  }

  console.log(makeEvent());
  

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };
  return (
    <div className="container">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={makeEvent()}
        style={{ height: "60vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
