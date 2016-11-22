import moment from 'moment';

export default function ttm(description, timestamp) {
    let html;
    if(timestamp) {
        html = '';

        let dTime = timestamp - Date.now();
        let hours = "";
        let minutes = "";
        let h = moment(dTime).format('h');
        if(parseInt(h)) {
            hours = h.toString() + " uur";
        }
        if(dTime/3600000) {
            hours = "";
        }
        let m = moment(dTime).format('m')
        if(parseInt(m)) {
            if(parseInt(m) === 1) {
                minutes = m.toString() + " minuut";
            } else {
                minutes = m.toString() + " minuten";
            }
        }
        let timeString = hours + (minutes && hours ? ' en ' : '') + minutes;
        if(!timeString) {
            timeString = 'een ogenblik';
        }

        let words = (description || '').toString()
        words.split(' ').filter((word) => word.length > 0).map((word) => {
            html += (html !== '' ? ' ' : '') + (word === '-begrip-' ? timeString : word);
        });
        return html;
    } else {
        return description;
    }
}