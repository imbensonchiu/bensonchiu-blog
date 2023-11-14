// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Benson Chiu @ NTU IM";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I am Benson Chiu, a student at National Taiwan University, majoring in Information Management and Economics. ";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Benson Chiu";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
