const convertTimeString = (seconds) => {
    var hh = Math.floor(seconds / 3600);
    var mm = Math.floor((seconds % 3600) / 60);
    var ss = (seconds % 3600) % 60;
    var d = 0;

    if (hh >= 24) {
        var hours = hh;
        hh = hours % 24;
        d = Math.floor(hours / 24);
    };

    if (hh < 10) { hh = `0${hh}` };
    if (mm < 10) { mm = `0${mm}` };
    if (ss < 10) { ss = `0${ss}` };
    if (d < 10) { d = `0${d}` };

    return {d: d, hh: hh, mm: mm, ss: ss};
};

module.exports = convertTimeString;