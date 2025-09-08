import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Page from "@/components/sb/Page";
import DoesNotExist from "@/components/sb/DoesNotExist";
import Hero from "@/components/sb/Hero";
import ProductGrid from "@/components/sb/ProductGrid";
import ProductFilters from "@/components/sb/ProductFilters";
import ProductsHero from "@/components/sb/ProductsHero";
import FooterLinksGroup from "@/components/sb/FooterLinksGroup";
import NewsLetterSignUp from "@/components/sb/NewsLetterSignUp";

export const components = {
  // Add your components here
  page: Page,
  doesNotExist: DoesNotExist,
  hero: Hero,
  product_grid: ProductGrid,
  product_filters: ProductFilters,
  products_hero: ProductsHero,
  footer_links_group: FooterLinksGroup,
  newsletter_signup: NewsLetterSignUp,
};

/**
 * Get the Storyblok API exports a StoryblokApi object to be used in the application
 * @returns {StoryblokApi}
 */
export const getStoryblokApi = storyblokInit({
  accessToken:
    process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN ||
    process.env.NEXT_PUBLIC_STORYBLOK_PUBLIC_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});
