export function speak(text) {
  responsiveVoice.speak(text, 'Dutch Female', {
    onstart: function() {
      console.log('begin');
    },
    onend: function() {
      console.log('uitgesproken');
    },
    onerror: function() {
      console.log('error');
    }
  });
}
