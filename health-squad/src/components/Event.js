import React, {Component} from 'react'

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                title: 'My Event Title',
                description: 'My event description',
                location: 'Birmingham',
                startDate: new Date(),
                endDate: new Date(),
            },
        };
        this.saveCalInvite = this.saveCalInvite.bind(this);
    }

    render() {
        return (
            <section>
                <a onClick={this.saveCalInvite}>Add to Calendar</a>
            </section>
        )
    }

    saveCalInvite() {
        // Create the .ics URL
        let url = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "BEGIN:VEVENT",
            "DTSTART:" + this.formatDate(this.state.event.startDate),
            "DTEND:" + this.formatDate(this.state.event.endDate),
            "SUMMARY:" + this.state.event.title,
            "DESCRIPTION:" + this.state.event.description,
            "LOCATION:" + this.state.event.eventLocation,
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

    formatDate(dateString) {
        let dateTime = new Date(dateString);
        return [
            dateTime.getUTCFullYear(),
            this.pad(dateTime.getUTCMonth() + 1),
            this.pad(dateTime.getUTCDate()),
            "T",
            this.pad(dateTime.getUTCHours()),
            this.pad(dateTime.getUTCMinutes()) + "00Z"
        ].join("");
    }

    pad(num) {
        // Ensure date values are double digits
        return num < 10 ? "0" + num : num;
    }

}

export default Event;