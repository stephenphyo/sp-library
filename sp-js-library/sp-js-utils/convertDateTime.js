const convertDateTime = (stringDT) => {
    const datetime = new Date(stringDT).toISOString();
    const date = datetime.substring(0, 10);
    const time = datetime.substring(11, 19);
    return {
        date: date,
        time: time,
        dd: date.split('-')[0],
        MM: date.split('-')[1],
        yyyy: date.split('-')[2],
        hh: time.split(':')[0],
        mm: time.split(':')[1],
        ss: time.split(':')[2]
    };
}

module.exports = convertDateTime;