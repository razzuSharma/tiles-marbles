const categories = [
    { name: "Tiles", image: "/tiles.jpg" },
    { name: "Marbles", image: "/marbles.jpg" },
    { name: "Granite", image: "/granite.jpg" },
  ];
  
  export default function Categories() {
    return (
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map(({ name, image }) => (
            <div key={name} className="bg-white rounded-lg shadow hover:shadow-xl transition">
              <div className="h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url('${image}')` }} />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  