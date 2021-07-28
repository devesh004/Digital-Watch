setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    const a = new Date();
    h = document.querySelector(".hour");
    m = document.querySelector(".minute");
    s = document.querySelector(".second");
    if (htime < 10)
        h.innerHTML = `0${htime}`;
    else
        h.innerHTML = htime;
    if (mtime < 10)
        m.innerHTML = `: 0${mtime} `;
    else
        m.innerHTML = `: ${mtime} `;
    if (stime < 10)
        s.innerHTML = `0${stime}`;
    else
        s.innerHTML = stime;
}, 1000);


