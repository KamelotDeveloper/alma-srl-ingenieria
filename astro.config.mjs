import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
 import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://kamelotdeveloper.github.io',
  base: '/alma-srl-ingenieria',
  devToolbar: {
    enabled: false,
  },
});


