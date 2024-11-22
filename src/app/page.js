import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      {/* Encabezado llamativo */}
      <header className="row-start-1 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-center py-8 px-4 rounded-lg shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
          Bienvenido ~ <span className="text-yellow-300">Tienda Online</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Encuentra todo lo que necesitas con un clic. Calidad y precios
          insuperables.
        </p>
      </header>

      {/* Contenido principal */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 dark:hover:bg-blue-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 shadow-lg"
            href="http://localhost:3000/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Ver Productos
          </a>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-600">
        <p className="text-sm">© {new Date().getFullYear()} Tu Tienda Online. Todos los derechos reservados.</p>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          Política de Privacidad
        </a>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          Términos y Condiciones
        </a>
      </footer>
    </div>
  );
}
