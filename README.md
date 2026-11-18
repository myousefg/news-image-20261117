# news-image-20261117

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/myousefg/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/myousefg/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

One image that sums up the world's news of **Tuesday 17 November 2026** in 40 stories: three lead stories (the
Crimean Bridge strikes, Iran's drones at a US base in Bahrain, the Quad summit in Manila), fifteen illustrated
stories from Kyiv to Alaska, a dotted world map of where they happened, and 22 shorter items.

`news.html` holds the layout, every drawing and every word on the picture. `render.mjs` draws it to a
1024 x 1024 `entry.png` with a headless Edge or Chrome, and `main.ts` copies that file to the output folder, so
both graded runs write the same bytes and nothing needs a network.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

To redraw the picture after editing `news.html`, run `node render.mjs`.

## Sources

Every story was checked against at least one report dated 17 November 2026, and most against two or more.
Claims made by the parties are worded as theirs on the picture. The reports used:

- Wikipedia's Current events page for 17 November 2026, which cites AP, Reuters, AFP, BBC, Al Jazeera and DW
- Democracy Now headlines and Newsquawk's US opening news for 17 November 2026
- UN News (including its World News in Brief), WHO figures reported there, and Africa CDC via RFI on Ebola
- NVIDIA's Q3 fiscal 2027 results release, filed 17 November 2026
- Yahoo News Australia (NCA NewsWire) and Diya TV on the Quad summit
- The Insider, Military.com, TWZ and Euromaidan Press on the Kerch Bridge
- NBC News, AP and CNN reports on the Alaska Senate race, as listed on Wikipedia
- BCIT News, First Alert 4 and 1News daily headlines

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
