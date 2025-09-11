'use client';

import { supabase } from "@/lib/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductFilters({ selectedCategory = null }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories from the categories table
        const { data: categoriesData, error } = await supabase
          .from('categories')
          .select('*')
          .order('name');

        if (error) {
          console.error('Error fetching categories:', error);
          return;
        }

        setCategories(categoriesData || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set('category', categoryId);
    } else {
      params.delete('category');
    }
    router.push(`/products?${params.toString()}`);
  };

  if (loading) {
    return (
      <div className="w-full py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 justify-start">
            <div className="px-6 py-3 text-sm text-black">Loading categories...</div>
          </div>
        </div>
      </div>
    );
  }

  // Define the specific order and capitalize first letters
  const orderedCategories = categories
    .filter(category => {
      const name = category.name.toLowerCase();
      return name === 'sweaters' || name === 'tops' || name === 'jackets' || name === 'hats';
    })
    .sort((a, b) => {
      const order = ['sweaters', 'tops', 'jackets', 'hats'];
      return order.indexOf(a.name.toLowerCase()) - order.indexOf(b.name.toLowerCase());
    })
    .map(category => ({
      ...category,
      name: category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()
    }));

  return (
      <div className="w-full py-4 mb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-4 justify-start">
          {orderedCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-6 py-1 w-28 text-sm font-medium transition-colors rounded-none ${
                selectedCategory === category.id.toString()
                  ? 'bg-black text-white'
                  : ' text-black border border-black hover:bg-black hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
