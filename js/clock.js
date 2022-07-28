(function () {
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
  
    function updateClock() {
      const h = new Date().getHours();
      const m = new Date().getMinutes();
      const s = new Date().getSeconds();
      hours.innerHTML = h < 10 ? "0" + h : h;
      minutes.innerHTML = m < 10 ? "0" + m : m;
      seconds.innerHTML = s < 10 ? "0" + s : s;
    }
  
    setInterval(updateClock, 1000);
  })();