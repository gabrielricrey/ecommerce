import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import getSbVersion from "@/utils/getSbVersion";

export default async function About() {
  try {
    const { data } = await fetchData();
    return (
      <div className="page">
        <StoryblokStory story={data.story} />
      </div>
    );
  } catch (err) {
    return (
      <div className="page">
        <p>About-sidan är inte publicerad i Storyblok ännu.</p>
      </div>
    );
  }
}


export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/about", {
    version: getSbVersion(),
  });
}
