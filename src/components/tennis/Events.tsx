import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api from '../../api';

export const Events = (props: any) => {

  console.log('a');

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(api.backend.url)
      .then(({data}) => {
        setEvents(data);
      });
  }, []);


  /*for (let i = 0; i <= atpEvents.length || i <= wtaEvents.length; i++) {
    events.push(
      <tr>
        {atpEvents[i] ? <td><Link to="/edit-prediction/${atpEvents[i].id}">atpEvents[i].name</Link></td> : <td/> }
        {wtaEvents[i] ? <td><Link to="/edit-prediction/${wtaEvents[i].id}">wtaEvents[i].name</Link></td> : <td/> }
      </tr>
    );
  }*/

  return (
    <div>
      <h2>Event list</h2>

      <table>
        <thead>
        <tr>
          <th>WTA</th>
          <th>ATP</th>
        </tr>
        </thead>
        <tbody>
        {events}
        </tbody>
      </table>
    </div>
  )
};