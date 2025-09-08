import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import getSbVersion from "@/utils/getSbVersion";

/**
 * Products page - renders the Storyblok story for products page
 * @returns {Promise<{story: StoryblokStory}>}
 */
export default async function Products() {
  const { data } = await fetchData();
  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
}

/**
 * Fetch the data from Storyblok through a server action
 * @returns {Promise<{story: StoryblokStory}>}
 */
export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/products-list/products", {
    version: getSbVersion(),
  });
}