// Entry for make.fun's "Sum up 17 November's world news in one image" bounty (Node 22, standard library only).
//
// The picture is drawn ahead of time: news.html holds the layout and the words, and render.mjs turns it into
// entry.png. This program only copies that finished file to the output folder, so both graded runs write the
// same bytes and nothing here touches a network.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
