# Button Lounge

A one-page site with three buttons:

- **Hear a joke** reads an adult joke out loud in the browser, and shows the text. An 18+ confirmation sits in front of it.
- **Show a photo** picks from photographs stored in this folder. They came from Unsplash.
- **Play a video** embeds a YouTube video and links out to it.

The page asks search engines not to index it (`noindex`). Anyone with the address can still open it.

## Run it on this Mac

```bash
cd ~/button-lounge
python3 -m http.server 8765 --bind 0.0.0.0
```

Open [http://localhost:8765](http://localhost:8765). Spoken jokes work here, because `localhost` counts as a secure page.

Friends on the same Wi-Fi can try `http://<this-mac's-lan-address>:8765`. That address is not a secure page, so the browser will show the joke and skip the voice. Photographs and videos still work. Guest Wi-Fi often blocks device-to-device traffic.

The process stops when you close it. The Mac has to stay awake.

## Put it on GitHub Pages

`gh` on this machine is already logged in as `schauderb`. A project site would live at:

`https://schauderb.github.io/button-lounge/`

GitHub Pages is public on the internet even when the repository is private. Spoken jokes work there, because the site is `https`.

Do not publish until you mean to. The steps, when you want them, are:

```bash
cd ~/button-lounge
git init
git add .
git commit -m "Add Button Lounge"
gh repo create button-lounge --public --source=. --remote=origin --push
gh api -X POST repos/schauderb/button-lounge/pages -f build_type=legacy -f source[branch]=main -f source[path]=/
```
