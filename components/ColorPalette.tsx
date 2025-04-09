const colorGroups = {
    cat: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    acero: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    tierra: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    maquinaria: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    hormigon: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  };
  
  export default function ColorPalette() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Paleta de colores personalizada</h1>
  
        {Object.entries(colorGroups).map(([name, shades]) => (
          <div key={name} className="mb-10">
            <h2 className="text-xl font-semibold mb-2 capitalize">{name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {shades.map((shade) => (
                <div
                  key={`${name}-${shade}`}
                  className={`h-20 rounded flex items-center justify-center text-sm ${
                    shade > 400 ? 'text-white' : 'text-gray-900'
                  }`}
                  style={{ backgroundColor: `var(--color-${name}-${shade})` }}
                >
                  {name}-{shade}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  