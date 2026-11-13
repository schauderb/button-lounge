# Kitten Window

A one-page site for Chrisi.

- **Hear a joke** reads a kitten joke out loud, and shows the words.
- **See a kitten** picks a photograph stored in this folder. Tap the picture for a boop. The photographs came from Unsplash.
- **Play a clip** embeds a short kitten film from YouTube.
- **Have a purr** plays a soft purr in the browser until she presses it again.
- The opening card offers a short note, and another one after that.
- The homepage shows the two cats by the window. That photograph is `images/our-cats.jpg`.

The page asks search engines not to index it. Anyone with the address can still open it.

## Run it on this Mac

```bash
cd ~/button-lounge
python3 -m http.server 8765 --bind 0.0.0.0
```

Open [http://localhost:8765](http://localhost:8765). The joke voice and the purr need localhost or https.

## What is live

The public site is [https://schauderb.github.io/button-lounge/](https://schauderb.github.io/button-lounge/). It changes only when `main` is pushed. Local edits stay on this Mac until then.
