import React from 'react';

import { CreationEvent, GameNotifier } from './liveNotifier';
import './buildNotifications.css';

export function BuildNotifications() {
  const userName = localStorage.getItem('userName') || 'Unknown Player';

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    GameNotifier.addHandler(handleNewCreation);

    return () => {
      GameNotifier.removeHandler(handleNewCreation);
    };
  }, []);

  function handleNewCreation(event) {
    setEvent((prevEvents) => {
      let newEvents = [event, ...prevEvents];
      if (newEvents.length > 6) {
        newEvents = newEvents.slice(0, 6);
      }
      return newEvents;
    });
  }

  function createMessageArray() {
    const maxMessages = 6;
    const visibleEvents = events.slice(0, maxMessages);

    return visibleEvents.map((event, i) => {
      let message = 'unknown';
      if (event.type === CreationEvent.Created) {
        message = `created a new build`;
      }

      return (
        <div key={i} className='event'>
          <span className={'player-event'}>{event.from.split('@')[0]}</span>
          {message}
        </div>
      );
    });
  }

  return (
    <div className='players'>
      <div id='player-messages'>{createMessageArray()}</div>
    </div>
  );
}
