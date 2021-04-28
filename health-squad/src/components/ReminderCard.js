import React, { useState }  from 'react';
import format from 'date-fns/format';
import add from 'date-fns/add';

const ReminderCard = ({med}) => {

  const [event, setEvent] = useState({
    title: med.medication.name,
    description: med.medication.directions,
    location: 'Houston',
    startDate: med.reminder,
    endDate: med.reminder,
  })

    let saveCalInvite = () => {
      let url = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        "DTSTART:" + formatDate(event.startDate),
        "DTEND:" + formatDate(event.endDate),
        "SUMMARY:" + event.title,
        "DESCRIPTION:" + event.description,
        "LOCATION:",
        "BEGIN:VALARM",
        "TRIGGER:-PT15M",
        "REPEAT:1",
        "DURATION:PT15M",
        "ACTION:DISPLAY",
        "DESCRIPTION:Reminder",
        "END:VALARM",
        "END:VEVENT",
        "END:VCALENDAR"
    ].join("\n");

    let blob = new Blob([url], {type: 'text/calendar;charset=utf-8'});

    if (/msie\s|trident\/|edge\//i.test(window.navigator.userAgent)) {
        // Open/Save link in IE and Edge
        window.navigator.msSaveBlob(blob, 'download.ics');
    } else {
        // Open/Save link in Modern Browsers
        window.open(encodeURI("data:text/calendar;charset=utf8," + url));
    }
  }

  const formatDate = (dateString) => {
    let dateTime = new Date(dateString);
    return [
        dateTime.getUTCFullYear(),
        pad(dateTime.getUTCMonth() + 1),
        pad(dateTime.getUTCDate()),
        "T",
        pad(dateTime.getUTCHours()),
        pad(dateTime.getUTCMinutes()) + "00Z"
    ].join("");
}

  const pad = (num) => {
    // Ensure date values are double digits
    return num < 10 ? "0" + num : num;
  }
  
  //formatting med.reminder time to only show HH:mma
  let test = add(new Date(med.reminder), {
    hours: 6,
    minutes: 0
  })
  
  console.log(test);

  var formattedDate = format(test, "H:mma");

  console.log(formattedDate);

  return(
<div className="card">
        {/* <div class="card" style="width: 18rem;"> */}
          <div className="card-body">
            <h5 className="card-title">{med.medication.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Instructions: {med.medication.directions}</h6>
            <p className="card-text">{formattedDate}</p>
            {/* <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a> */}
            <button onClick={saveCalInvite} type="button" className="btn btn-info">Add to calendar<br></br>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-month-fill" viewBox="0 0 16 16">
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm.104 7.305L4.9 10.18H3.284l.8-2.375h.02zm9.074 2.297c0-.832-.414-1.36-1.062-1.36-.692 0-1.098.492-1.098 1.36v.253c0 .852.406 1.364 1.098 1.364.671 0 1.062-.516 1.062-1.364v-.253z"/>
              <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM2.56 12.332h-.71L3.748 7h.696l1.898 5.332h-.719l-.539-1.602H3.1l-.54 1.602zm7.29-4.105v4.105h-.668v-.539h-.027c-.145.324-.532.605-1.188.605-.847 0-1.453-.484-1.453-1.425V8.227h.676v2.554c0 .766.441 1.012.98 1.012.59 0 1.004-.371 1.004-1.023V8.227h.676zm1.273 4.41c.075.332.422.636.985.636.648 0 1.07-.378 1.07-1.023v-.605h-.02c-.163.355-.613.648-1.171.648-.957 0-1.64-.672-1.64-1.902v-.34c0-1.207.675-1.887 1.64-1.887.558 0 1.004.293 1.195.64h.02v-.577h.648v4.03c0 1.052-.816 1.579-1.746 1.579-1.043 0-1.574-.516-1.668-1.2h.687z"/>
            </svg></button>
          </div>
        </div>
  )
}

export default ReminderCard