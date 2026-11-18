// Development tool, not run by the grader: draws an HTML page into a PNG with a headless Edge or Chrome,
// then checks the result against the bounty's limits (a whole PNG, 1024 x 1024 at most, 1 MiB at most).
//
//   node render.mjs                       news.html  -> entry.png
//   node render.mjs page.html out.png     any page   -> any file

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const input = resolve(process.argv[2] ?? join(here, 'news.html'));
const output = resolve(process.argv[3] ?? join(here, 'entry.png'));

const browsers = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
];
const browser = browsers.find((path) => existsSync(path));
if (!browser) throw new Error('no Edge or Chrome found: edit the browsers list in render.mjs');

if (existsSync(output)) rmSync(output);
execFileSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1024,1024',
  '--virtual-time-budget=4000',
  `--screenshot=${output}`,
  pathToFileURL(input).href,
], { stdio: 'ignore', timeout: 60000 });

const bytes = readFileSync(output);
const signature = bytes.subarray(0, 8).toString('hex');
if (signature !== '89504e470d0a1a0a') throw new Error('the browser did not write a PNG');
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
const size = statSync(output).size;
console.log(`${output}: ${width} x ${height}, ${size} bytes`);
if (width > 1024 || height > 1024) throw new Error('image is larger than 1024 x 1024');
if (size > 1048576) throw new Error('image is larger than 1 MiB');
