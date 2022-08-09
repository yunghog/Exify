export const displayDateTime = (datestr: string) => {
  let [date, time] = datestr.split(' ');
  date = date.split(':').reverse().join('-');
  time = time.split(':').slice(0, 2).join(':') + ' Hours';
  return date + '/' + time;
};
