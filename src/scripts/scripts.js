
//////////////// Additional scripts

export const getFormData = (title, text, time, timeInMs, id) => {
  if (text.value && title.value)
    return {
      text: text.value,
      time: time,
      timeInMs,
      done: false,
      title: title.value,
      id
    };
  return alert(!text.value ? "Заполните поле задачи!" : "Заполните поле даты!");
};

export const getTimeInMs = time => {
  const date = new Date(time);
  time = date.getTime();
  return time;
};

export const getTime = time =>
  `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`;