import { supabase } from "@/lib/supabaseClient";

export default async function sitemap() {
  const baseUrl = 'https://ecommerce-ttwq.vercel.app';
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/home`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('id, updated_at')
      .eq('is_active', true);

    if (error) {
      console.error('Error fetching products for sitemap:', error);
      return staticPages;
    }

    const productPages = products.map((product) => ({
      url: `${baseUrl}/product-detail-page/${product.id}`,
      lastModified: new Date(product.updated_at),
      changeFrequency: 'weekly',
      priority: 0.6,
    }));

    return [...staticPages, ...productPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return staticPages;
  }
}
