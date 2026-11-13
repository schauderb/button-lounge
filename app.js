const jokes = [
  "My wife said we need more spontaneity in the bedroom. So I hid in the closet and jumped out naked. She was on a video call with work. Human resources called it a hostile workaround.",
  "She whispered that she wanted me to wreck her. I said I don't do home repairs. She left. The faucet is still dripping. So is my pride.",
  "I tried dirty talk. I told her I was going to do unspeakable things. Then I opened our text thread and read last night's argument out loud. She said that was too far.",
  "I like my coffee the way I like my partners. Hot, a little bitter, and gone before I have to talk about feelings.",
  "The Kama Sutra has dozens of positions. My favorite is the one where I am already asleep and nobody is disappointed.",
  "He asked how many people I had slept with. I said, define slept. He said, you know what I mean. I said, define you.",
  "I bought candles, wine, and new sheets. She walked in, looked around, and said this is a lot. I said so is faking it for six months, but here we are.",
  "Dating tip. If someone texts you, you up, at one in the morning, they are not asking about your sleep schedule. They are asking whether your standards have already gone to bed.",
  "My therapist says I use humor to avoid intimacy. I asked if she wanted to hear a joke about my penis. She ended the session early, which I am counting as encouragement.",
  "Rule one of a threesome is communication. Rule two. If you are the person who suggested board games, you are not in a threesome. You are the chaperone.",
  "I told my date I was into casual sex. She said she preferred dressed up. So I put on a tie and disappointed her formally.",
  "She asked me to talk dirty. I looked her in the eye and said the sink is full, the towels are damp, and I have not changed these sheets since the last time we did this.",
  "I joined a nudist group for the community. It is mostly people standing around, unsure where to put their hands, which is also how I date.",
  "Foreplay matters. That is why I spend twenty minutes trying to get the laptop onto the television before anyone has taken off their shoes."
];

const photos = [
  ["images/ridge.jpg", "One person, a lot of mountain", "Late light on a green ridge, and somebody small enough to make the view feel huge."],
  ["images/valley.jpg", "Yosemite Valley", "A river catching the last orange light between the granite walls."],
  ["images/stars.jpg", "Snow and a meteor", "Winter peaks under a bright smear of the Milky Way."],
  ["images/galaxy.jpg", "A purple sky", "Stars, one long streak, and the ridge gone black."],
  ["images/beach.jpg", "Warm water", "A quiet beach while the sun is still sitting on the horizon."],
  ["images/forest.jpg", "The path in", "A dirt track through tall trunks and green light."],
  ["images/falls.jpg", "Multnomah Falls", "The tall fall in Oregon, with the stone bridge parked in front of it."],
  ["images/gates.jpg", "Fuji at dusk", "A pagoda in the foreground, the mountain pale behind the city."],
  ["images/street.jpg", "Evening street", "Two people in kimono, a pagoda, and the lamps just coming on."],
  ["images/crossing.jpg", "Tokyo in the rain", "Neon, wet pavement, and a crossing that does not seem to pause."],
  ["images/city.jpg", "Manhattan, low sun", "The light cuts straight down a street between the towers."],
  ["images/night.jpg", "Lower Manhattan", "One World Trade at dusk, and the moon already up."],
  ["images/fog.jpg", "Cliff and a road", "Green rock, low cloud, and a single road bending through the valley."],
  ["images/hills.jpg", "The stone spiral", "A ring of rocks in a bright glen, with the sun dropped between the hills."],
  ["images/lake.jpg", "Turquoise water", "Rowboats on a clear alpine lake, mountains stacked behind them."],
  ["images/peak.jpg", "The far snow", "Spruce in the foreground, a wide valley, and snow still sitting on the high peaks."]
].map(([src, title, note]) => ({ src, title, note }));

const videos = [
  {
    id: "0fKBhvDjuy0",
    title: "Powers of Ten",
    channel: "Eames Office",
    length: "9 minutes",
    why: "A picnic blanket in Chicago, then a jump outward every ten seconds until the film runs out of universe. Then it comes back, all the way into a proton."
  },
  {
    id: "qybUFnY7Y8w",
    title: "This Too Shall Pass",
    channel: "OK Go",
    length: "4 minutes",
    why: "A Rube Goldberg machine the size of a warehouse, timed to the song. One take. You can see the panic in the good way."
  },
  {
    id: "ysa5OBhXz-Q",
    title: "How Wolves Change Rivers",
    channel: "Sustainable Human",
    length: "about 4 minutes",
    why: "A short film about Yellowstone, and how putting wolves back moved the deer, the trees, and eventually the shape of the river."
  },
  {
    id: "uD4izuDMUQA",
    title: "Timelapse of the Future",
    channel: "melodysheep",
    length: "29 minutes",
    why: "From this year to the end of time. Stars burn out, black holes evaporate, and the soundtrack stays with you."
  },
  {
    id: "LXb3EKWsInQ",
    title: "Costa Rica in 4K",
    channel: "Jacob + Katie Schwarz",
    length: "a scenic flight",
    why: "Coast, cloud forest, and water, shot like the country is showing off and knows it."
  },
  {
    id: "zSWdZVtXT7E",
    title: "Interstellar, the trailer",
    channel: "Warner Bros.",
    length: "about 2 minutes",
    why: "The organ, the dock, the corn. A trailer that still feels like a whole movie."
  },
  {
    id: "fJ9rUzIMcZQ",
    title: "Bohemian Rhapsody",
    channel: "Queen",
    length: "about 6 minutes",
    why: "The official video, remastered. Opera, stomp, and the guitar solo everybody still tries to air-conduct."
  },
  {
    id: "OPf0YbXqDm0",
    title: "Uptown Funk",
    channel: "Mark Ronson and Bruno Mars",
    length: "about 4 minutes",
    why: "A horn section, a sidewalk, and Bruno Mars dressed like the evening already went well."
  },
  {
    id: "jNQXAC9IVRw",
    title: "Me at the zoo",
    channel: "jawed",
    length: "19 seconds",
    why: "The first video ever posted to YouTube. Elephants, a bad mic, and the start of the whole website."
  }
];

const stage = document.querySelector("#stage");
const gate = document.querySelector("#gate");
let lastJoke = -1;
let lastPhoto = -1;
let lastVideo = -1;

function pickIndex(length, previous) {
  if (length < 2) return 0;
  let index = previous;
  while (index === previous) index = Math.floor(Math.random() * length);
  return index;
}

function clearStage() {
  if (window.speechSynthesis) speechSynthesis.cancel();
  stage.replaceChildren();
}

function button(className, label, onClick) {
  const node = document.createElement("button");
  node.type = "button";
  node.className = className;
  node.textContent = label;
  node.addEventListener("click", onClick);
  return node;
}

function chooseVoice() {
  const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  return (
    voices.find((voice) => voice.lang === "en-US" && /samantha|aaron|nicky|google/i.test(voice.name)) ||
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
    status.textContent = "Reading aloud needs localhost or https. On a plain network address, the joke stays on the page.";
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.98;
  utter.pitch = 0.96;
  const voice = chooseVoice();
  if (voice) utter.voice = voice;
  utter.onstart = () => { status.textContent = "Speaking."; };
  utter.onend = () => { status.textContent = "That's the one."; };
  utter.onerror = () => { status.textContent = "The voice stalled. The joke is on the page."; };
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function showJoke() {
  clearStage();
  lastJoke = pickIndex(jokes.length, lastJoke);
  const text = jokes[lastJoke];

  const kicker = document.createElement("p");
  kicker.className = "card-kicker";
  kicker.textContent = "Adult joke";

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
  frame.append(image);

  const title = document.createElement("h2");
  title.className = "card-title";
  title.textContent = photo.title;

  const note = document.createElement("p");
  note.className = "note";
  note.textContent = photo.note;

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.append(button("solid-btn", "Another photo", showPhoto));

  stage.append(frame, title, note, actions);
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
  open.style.textDecoration = "none";
  open.style.display = "inline-block";
  actions.append(open, button("text-btn", "Another video", showVideo));

  stage.append(frame, title, note, actions);
}

document.querySelector("#joke").addEventListener("click", () => {
  if (sessionStorage.getItem("lounge-adult") === "yes") {
    showJoke();
    return;
  }
  gate.showModal();
});

document.querySelector("#allow").addEventListener("click", () => {
  sessionStorage.setItem("lounge-adult", "yes");
  gate.close();
  showJoke();
});

document.querySelector("#deny").addEventListener("click", () => {
  gate.close();
});

document.querySelector("#photo").addEventListener("click", showPhoto);
document.querySelector("#video").addEventListener("click", showVideo);

document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (gate.open) return;
  const target = event.target;
  if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
  if (event.key === "1") document.querySelector("#joke").click();
  if (event.key === "2") showPhoto();
  if (event.key === "3") showVideo();
});

if (window.speechSynthesis) {
  speechSynthesis.getVoices();
  speechSynthesis.addEventListener("voiceschanged", () => speechSynthesis.getVoices());
}
