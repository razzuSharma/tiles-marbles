import { categories } from "../data/categories";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {
  return (
    <section className="px-4 md:px-12 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Categories</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((item) => (
          <CategoryCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
