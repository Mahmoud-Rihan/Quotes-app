var Quotes = [
  " ’’person who never made a mistake never tried anything new.’’ - Albert Einstein",

  " ’’We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths.’’ - Walt Disney ",

  " ’’ One does not discover new lands without consenting to lose sight of the shore for a very long time.’’ - Andre Gide ",

  " ’’ If you want to be a Millionaire, start with a billion dollars and launch a new airline.’’ - Richard Branson",

  " ’’ The joy of life comes from our encounters with new experiences, and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun.’’ - Christopher McCandless",

  " ’’ You are never too old to set another goal or to dream a new dream.’’ - Les Brown",

  " ’’ Every new beginning comes from some other beginning's end.’’ - Seneca",

  " ’’Every day brings new choices.’’ - Martha Beck",

  " ’’ With the new day comes new strength and new thoughts.’’ - Eleanor Roosevelt",

  " ’’ Old friends pass away, new friends appear. It is just like the days. An old day passes, a new day arrives. The important thing is to make it meaningful: a meaningful friend - or a meaningful day.’’ - Dalai Lama",

  " ’’ Make new friends, but keep the old; Those are silver, these are gold.’’ - Joseph Parry",

  " ’’ I say, beware of all enterprises that require new clothes, and not rather a new wearer of clothes. Henry ’’ - David Thoreau",

  " ’’ I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. ’’  ― Marilyn Monroe ",

  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ― Albert Einstein ",
];

function GetQuote() {
  var randomQuote = Math.floor(Math.random() * Quotes.length);
  document.getElementById("quote").innerHTML = Quotes[randomQuote];
  Quotes.splice(randomQuote, 1); // Avoid Repeating Quotes
  if(randomQuote==0){
    document.getElementById('quote').innerHTML='End of quotes'
  }
}
