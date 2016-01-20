export function schedule(date) {
  if (typeof date === 'object') {
    date = date.getTime();
  }
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, date - Date.now());
  });
}
