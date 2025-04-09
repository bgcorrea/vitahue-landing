import Link from "next/link";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="bg-tierra-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`py-8 ${border ? "border-t border-tierra-200" : ""}`}>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <div className="text-xl font-bold text-tierra-800">VITAHUE</div>
              <div className="mt-1 text-sm text-tierra-600">
                Soluciones en Construcción
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-2 sm:items-end">
              <div className="text-sm text-tierra-600">
                <span className="font-medium">Contacto:</span> +56 9 1234 5678
              </div>
              <div className="text-sm text-tierra-600">
                <span className="font-medium">Email:</span> info@vitahue.cl
              </div>
              <div className="text-sm text-tierra-600">
                <span className="font-medium">Dirección:</span> Ruta 5 Sur, Km 123, Santiago
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t border-tierra-200 pt-8 text-center">
            <p className="text-sm text-tierra-600">
              &copy; {new Date().getFullYear()} Vitahue. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
