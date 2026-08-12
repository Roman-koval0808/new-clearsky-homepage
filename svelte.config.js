import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Vercel adapter. Pages are prerendered (see +layout.js prerender=true),
    // so they ship as static output; the adapter still enables SSR/edge later
    // if any route opts out of prerendering.
    adapter: adapter(),
    prerender: {
      // Placeholder `#` CTA/video links and not-yet-supplied assets shouldn't
      // fail the build. Warn instead of throwing; real links get wired later.
      handleHttpError: ({ path, referrer, message }) => {
        console.warn(`[prerender] ${message} (${path} from ${referrer})`);
      },
      handleMissingId: 'warn'
    }
  }
};

export default config;
