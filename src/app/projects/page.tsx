
export const metadata = {
  title: "Proyectos - Jaime Díaz",
  description: "Aquí encontrarás una selección de mis proyectos como desarrollador backend e iniciativas en inteligencia artificial.",
  keywords: ["Jaime Díaz", "Desarrollador Backend", "IA aplicada", "NestJS", "PostgreSQL", "Docker"],
};

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-zinc-50 mb-4">
        Proyectos
      </h1>
      <p className="text-lg text-gray-700 dark:text-zinc-300 mb-8">
        Aquí encontrarás una selección de mis proyectos como desarrollador
        backend e iniciativas en inteligencia artificial.  
        <span className="block mt-2">
          Por ahora esta sección está en construcción 🚧.
        </span>
      </p>

      <div className="rounded-lg border border-dashed border-gray-300 dark:border-zinc-700 p-8 text-center text-gray-500 dark:text-zinc-400">
        <p className="mb-2">⚒️ Preparando el showcase...</p>
        <p className="text-sm">
          Próximamente verás aquí proyectos con NestJS, PostgreSQL, Docker y IA aplicada.
        </p>
      </div>
    </section>
  );
}
