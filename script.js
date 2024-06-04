const countdown = () => {
  const countDate = new Date("December 25, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  updateTime("days", days);
  updateTime("hours", hours);
  updateTime("minutes", minutes);
  updateTime("seconds", seconds);
}

const updateTime = (id, value) => {
  const element = document.getElementById(id);
  const newValue = document.createElement('span');
  newValue.textContent = value;
  newValue.className = 'fade-in';
  element.appendChild(newValue);

  if (element.childNodes.length > 1) {
      element.removeChild(element.childNodes[0]);
  }
}

setInterval(countdown, 1000);
