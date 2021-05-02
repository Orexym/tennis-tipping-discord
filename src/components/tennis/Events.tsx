import React, { useEffect, useState } from 'react';
import { getTennisEvents } from '../../services/service';

export const Events = (props: any) => {

  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    getTennisEvents()
      .then(response => {
        setEvents(response.data as any[]);
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