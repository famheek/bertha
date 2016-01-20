export function schedule(date) {
  if (typeof date === 'object') {
    date = date.getTime();
  }
  return new Promise(function(resolve, reject) {
    console.log(date - Date.now());
    setTimeout(resolve, date - Date.now());
  });
}
