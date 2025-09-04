import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Page from "@/components/sb/Page";
import DoesNotExist from "@/components/sb/DoesNotExist";
import Hero from "@/components/sb/Hero";
import FooterLinksGroup from "@/components/sb/FooterLinksGroup";
import LatestArrivals from "@/components/sb/LatestArrivals";

export const components = {
  // Add your components here
  page: Page,
  hero: Hero,
  latest_arrivals: LatestArrivals,
  doesNotExist: DoesNotExist,
  footer_links_group: FooterLinksGroup,
};

/**
 * Get the Storyblok API exports a StoryblokApi object to be used in the application
 * @returns {StoryblokApi}
 */
export const getStoryblokApi = storyblokInit({
  accessToken:
    process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN ||
    NEXT_PUBLIC_STORYBLOK_PUBLIC_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});
