
export const metadata = {
  title: "Skills - Jaime Díaz",
  description: "Aquí encontrarás una selección de mis habilidades como desarrollador backend e inteligencia artificial.",
  keywords: ["Jaime Díaz", "Desarrollador Backend", "IA aplicada", "NestJS", "PostgreSQL", "Docker"],
};

export default function SkillsPage() {
  const skills = [
    { name: "NestJS", category: "Backend" },
    { name: "TypeScript", category: "Lenguaje" },
    { name: "PostgreSQL", category: "Base de datos" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes (aprendiendo)", category: "DevOps" },
    { name: "Node.js", category: "Backend" },
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "UI" },
    { name: "Git / GitHub", category: "Control de versiones" },
    { name: "RAG (FAISS, Embeddings)", category: "IA aplicada" },
    { name: "Fine-tuning LLM", category: "IA aplicada" },
    { name: "OpenAI API", category: "IA aplicada" },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-zinc-50 mb-6">
        Skills
      </h1>
      <p className="text-lg text-gray-700 dark:text-zinc-300 mb-10 max-w-2xl">
        Tecnologías y herramientas que utilizo en mi trabajo como desarrollador
        backend e investigador de inteligencia artificial.
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="rounded-xl border bg-card text-card-foreground shadow-sm p-4 text-center transition-all duration-300 ease-out transform hover:scale-105 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
          >
            <span className="block text-lg font-semibold">{skill.name}</span>
            <span className="text-sm opacity-80">{skill.category}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
