const jokes = [
  "I asked the kitten what she wanted for dinner. She said the red dot. I said that is not a food. She said that sounds like a you problem.",
  "Kittens spend most of the day asleep. The rest of the day is a performance review of your life choices.",
  "My kitten brought me a toy mouse at three in the morning. I believe it was a quarterly report.",
  "Why did the kitten sit on the keyboard? She was making sure the work got purr-reviewed.",
  "A kitten will ignore the toy you bought, and then lose her whole mind over the receipt.",
  "I told the kitten the counter was closed. We are now in mediation.",
  "What do you call a pile of kittens? A meow-ntain. They accept the title. They do not accept being moved.",
  "The kitten knocked a glass off the table, then looked at me like I had done it with my thoughts.",
  "Why did the kitten join the band? She already knew how to pause for a very long time, and then make one enormous noise.",
  "I bought a kitten a tiny bed. She sleeps in the box. The bed is now a sculpture called No Thank You.",
  "How does a kitten answer the phone? She says please hold, I am in a sunbeam, and this meeting could have been a nap.",
  "A kitten's love language is sitting on the exact sentence you were reading.",
  "I asked if she wanted to go outside. She looked at the door, looked at me, and chose the window, where the birds are television.",
  "What did the kitten say to the paper bag? If I fits, I sits. If I sits, this is my house now.",
  "The kitten keeps a strict schedule. Nap, zoom, snack, judge, nap. She has never once been late to the judging."
];

const notes = [
  "You can rest. The sunbeam will wait.",
  "Chrisi, you are allowed to take up space, the way a kitten does.",
  "Something small and good is enough for today.",
  "If the day was loud, this is the quiet part.",
  "A kitten would sit beside you and ask for nothing but your company.",
  "You do not have to earn a soft place to land.",
  "Hello. This window was made so you could have a little joy on purpose.",
  "Stay as long as you like. There is another kitten whenever you want one."
];

const photos = [
  ["images/our-cats.jpg", "Keeping the window", "The gray one and the cream one, both on duty by the glass."],
  ["images/tabby-kitten.jpg", "The small tabby", "A kitten on the terrazzo, ears up, already considering you."],
  ["images/paw-up.jpg", "One paw up", "A golden kitten with a question, and one paw already in the air."],
  ["images/sofa-kitten.jpg", "Hello from the sofa", "A tiny folded-ear kitten, one paw on the cushion, the other holding the conversation."],
  ["images/leaves.jpg", "Autumn kitten", "A white kitten on her back, arranged among yellow leaves like she planned the whole picture."],
  ["images/bandana.jpg", "The yellow bandana", "A kitten in a bandana, mid-laugh, as if you just said something excellent."],
  ["images/asleep.jpg", "Asleep on the tile", "A fluffy orange cat, one paw over her face, completely done for the day."],
  ["images/table-paws.jpg", "Paws on the table", "An orange cat with both paws over the edge, waiting to be consulted."],
  ["images/chin.jpg", "Chin scratches", "A calico with her eyes closed, accepting the scratch as her due."],
  ["images/loaf.jpg", "The loaf", "A tabby folded into a perfect loaf, green eyes still on duty."],
  ["images/blue-eyes.jpg", "Blue eyes", "A pale cat looking up, as if the ceiling just told a secret."],
  ["images/white-fluff.jpg", "White fluff", "A long-haired white cat against a bright blue wall, pink nose, no urgent plans."],
  ["images/stretch.jpg", "The long stretch", "An orange cat in a full morning stretch, tail up, front paws as far as they go."],
  ["images/sunglasses.jpg", "The cool one", "A gray folded-ear cat in tiny gold sunglasses. The basket behind her is not as cool."],
  ["images/blanket.jpg", "Under the blanket", "A tabby tucked in, only the face showing, eyes wide like she has been found."],
  ["images/green-eyes.jpg", "Against the sky", "A tabby face and two green eyes, with nothing behind her but blue."],
  ["images/stairs.jpg", "On the step", "A tabby sitting halfway up the stairs, tail hanging down, in no hurry to choose a floor."],
  ["images/tuxedo.jpg", "Paws over the rail", "A black-and-white cat with both white paws draped over a rail, supervising."],
  ["images/serious.jpg", "The committee", "A very round, very serious cat by the window. She has notes."]
].map(([src, title, note]) => ({ src, title, note }));

const videos = [
  {
    id: "0Bmhjf0rKe8",
    title: "Surprised Kitty",
    channel: "rozzzafly",
    length: "a very short clip",
    why: "The original. A kitten hears a noise, and her whole face participates."
  },
  {
    id: "IuHnAq6PMT4",
    title: "Copy Cat",
    channel: "Simon's Cat",
    length: "about a minute and a half",
    why: "A kitten tries to do whatever the grown cat does. The grown cat regrets being a role model."
  },
  {
    id: "CLnHzv7OKao",
    title: "Muddy Paws",
    channel: "Simon's Cat",
    length: "a short film",
    why: "One small kitten, a great deal of mud, and a house that was clean a moment ago."
  },
  {
    id: "P3y8vc-3iVU",
    title: "Bed Sheets",
    channel: "Simon's Cat",
    length: "a short film",
    why: "Making the bed becomes a sport. The kitten is winning."
  },
  {
    id: "G5FUH3eoizc",
    title: "Mirror Mirror",
    channel: "Simon's Cat",
    length: "a short film",
    why: "A kitten meets the other kitten in the mirror and takes the rivalry personally."
  },
  {
    id: "sz-UQfw8Qeg",
    title: "Scratch Post",
    channel: "Simon's Cat",
    length: "a short film",
    why: "There is a perfectly good scratching post. The kitten has other ideas about the furniture."
  },
  {
    id: "TayIfVa0QPs",
    title: "Waiting Game",
    channel: "Simon's Cat",
    length: "a short film",
    why: "Patience, from a kitten's point of view, lasts about four seconds."
  },
  {
    id: "69m4gc0uSlA",
    title: "Kitten Surprise",
    channel: "Simon's Cat",
    length: "about 3 minutes",
    why: "The day the kitten arrives. Soft, funny, and a little bit of a love story."
  },
  {
    id: "YExoq62sOrQ",
    title: "Kitten Origins",
    channel: "Simon's Cat",
    length: "about 9 minutes",
    why: "The longer color version of how the kitten came home. Worth the whole cup of tea."
  }
];

const stage = document.querySelector("#stage");
const purrButton = document.querySelector("#purr");
let lastJoke = -1;
let lastPhoto = -1;
let lastVideo = -1;
let lastNote = -1;
let purr = null;

function pickIndex(length, previous) {
  if (length < 2) return 0;
  let index = previous;
  while (index === previous) index = Math.floor(Math.random() * length);
  return index;
}

function button(className, label, onClick) {
  const node = document.createElement("button");
  node.type = "button";
  node.className = className;
  node.textContent = label;
  node.addEventListener("click", onClick);
  return node;
}

function stopPurr() {
  purrButton.setAttribute("aria-pressed", "false");
  if (!purr) return;
  const { ctx, gain, sources } = purr;
  const handle = purr;
  purr = null;
  const t = ctx.currentTime;
  gain.gain.cancelScheduledValues(t);
  gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), t);
  gain.gain.linearRampToValueAtTime(0.0001, t + 0.25);
  for (const source of sources) source.stop(t + 0.3);
  setTimeout(() => {
    if (purr !== handle) ctx.close();
  }, 400);
}

function startPurr() {
  stopPurr();
  const ctx = new AudioContext();
  const length = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < length; i += 1) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    data[i] = last * 3.5;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  noise.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 240;
  const gain = ctx.createGain();
  gain.gain.value = 0.11;
  const lfo = ctx.createOscillator();
  lfo.type = "sine";
  lfo.frequency.value = 26;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.07;
  noise.connect(filter);
  filter.connect(gain);
  lfo.connect(lfoGain);
  lfoGain.connect(gain.gain);
  gain.connect(ctx.destination);
  noise.start();
  lfo.start();
  ctx.resume();
  purr = { ctx, gain, sources: [noise, lfo] };
  purrButton.setAttribute("aria-pressed", "true");
}

function clearStage() {
  if (window.speechSynthesis) speechSynthesis.cancel();
  stopPurr();
  stage.replaceChildren();
}

function chooseVoice() {
  const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  return (
    voices.find((voice) => voice.lang === "en-US" && /samantha|karen|moira|google/i.test(voice.name)) ||
    voices.find((voice) => voice.lang === "en-US") ||
    voices.find((voice) => voice.lang.toLowerCase().startsWith("en")) ||
    null
  );
}

function speak(text, status) {
  if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
    status.textContent = "This browser will not read aloud. The joke is on the page.";
    return;
  }
  if (!window.isSecureContext) {
    status.textContent = "Reading aloud needs localhost or https. The joke is still on the page.";
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.96;
  utter.pitch = 1.04;
  const voice = chooseVoice();
  if (voice) utter.voice = voice;
  utter.onstart = () => { status.textContent = "Speaking."; };
  utter.onend = () => { status.textContent = "That's the one."; };
  utter.onerror = () => { status.textContent = "The voice stalled. The joke is on the page."; };
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function showHome() {
  clearStage();
  lastNote = pickIndex(notes.length, lastNote);
  const title = document.createElement("p");
  title.className = "empty-title";
  title.textContent = "The sunbeam is free.";
  const note = document.createElement("p");
  note.className = "note";
  note.textContent = notes[lastNote];
  const actions = document.createElement("div");
  actions.className = "actions";
  actions.append(button("text-btn", "Another note", showHome));
  stage.append(title, note, actions);
}

function showJoke() {
  clearStage();
  lastJoke = pickIndex(jokes.length, lastJoke);
  const text = jokes[lastJoke];
  const kicker = document.createElement("p");
  kicker.className = "card-kicker";
  kicker.textContent = "A kitten joke";
  const quote = document.createElement("p");
  quote.className = "joke-text";
  quote.textContent = text;
  const status = document.createElement("p");
  status.className = "status";
  status.textContent = "Getting a voice…";
  const actions = document.createElement("div");
  actions.className = "actions";
  actions.append(
    button("solid-btn", "Say it again", () => speak(text, status)),
    button("text-btn", "Another joke", showJoke)
  );
  stage.append(kicker, quote, status, actions);
  speak(text, status);
}

function showPhoto() {
  clearStage();
  lastPhoto = pickIndex(photos.length, lastPhoto);
  const photo = photos[lastPhoto];
  const frame = document.createElement("div");
  frame.className = "photo-frame";
  const image = document.createElement("img");
  image.src = photo.src;
  image.alt = photo.title;
  const boopLine = document.createElement("p");
  boopLine.className = "status";
  boopLine.textContent = "Tap the picture for a boop.";
  frame.addEventListener("click", () => {
    image.classList.remove("boop");
    void image.offsetWidth;
    image.classList.add("boop");
    boopLine.textContent = "Boop.";
  });
  frame.append(image);
  const title = document.createElement("h2");
  title.className = "card-title";
  title.textContent = photo.title;
  const note = document.createElement("p");
  note.className = "note";
  note.textContent = photo.note;
  const actions = document.createElement("div");
  actions.className = "actions";
  actions.append(button("solid-btn", "Another picture", showPhoto));
  stage.append(frame, title, note, boopLine, actions);
}

function showVideo() {
  clearStage();
  lastVideo = pickIndex(videos.length, lastVideo);
  const video = videos[lastVideo];
  const frame = document.createElement("div");
  frame.className = "frame";
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0`;
  iframe.title = video.title;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  frame.append(iframe);
  const title = document.createElement("h2");
  title.className = "card-title";
  title.textContent = video.title;
  const note = document.createElement("p");
  note.className = "note";
  note.textContent = `${video.channel} · ${video.length}. ${video.why}`;
  const actions = document.createElement("div");
  actions.className = "actions";
  const open = document.createElement("a");
  open.className = "solid-btn";
  open.href = `https://www.youtube.com/watch?v=${video.id}`;
  open.target = "_blank";
  open.rel = "noopener noreferrer";
  open.textContent = "Open on YouTube";
  actions.append(open, button("text-btn", "Another clip", showVideo));
  stage.append(frame, title, note, actions);
}

function showPurr() {
  if (purr) {
    clearStage();
    const title = document.createElement("p");
    title.className = "empty-title";
    title.textContent = "The purr settled.";
    const note = document.createElement("p");
    note.className = "note";
    note.textContent = "Come back whenever you want it again.";
    stage.append(title, note);
    return;
  }
  clearStage();
  startPurr();
  const wrap = document.createElement("div");
  wrap.className = "purr-wrap";
  const orb = document.createElement("div");
  orb.className = "orb on";
  const title = document.createElement("p");
  title.className = "purr-title";
  title.textContent = "Purring for you.";
  const note = document.createElement("p");
  note.className = "note";
  note.textContent = "Leave it on while you sit. Press the button again when you have had enough.";
  wrap.append(orb, title, note);
  stage.append(wrap);
}

document.querySelector("#joke").addEventListener("click", showJoke);
document.querySelector("#photo").addEventListener("click", showPhoto);
document.querySelector("#video").addEventListener("click", showVideo);
purrButton.addEventListener("click", showPurr);

document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const target = event.target;
  if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
  if (event.key === "1") showJoke();
  if (event.key === "2") showPhoto();
  if (event.key === "3") showVideo();
  if (event.key === "4") showPurr();
});

if (window.speechSynthesis) {
  speechSynthesis.getVoices();
  speechSynthesis.addEventListener("voiceschanged", () => speechSynthesis.getVoices());
}

showHome();
