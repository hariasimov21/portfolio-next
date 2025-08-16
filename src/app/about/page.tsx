import { ReactNode } from "react";


// app/components/About.jsx (o donde prefieras)

export const metadata = {
  title: "Sobre mí - Jaime Díaz",
  description: "Conoce más sobre Jaime Díaz, su experiencia y proyectos en desarrollo backend e inteligencia artificial.",
  keywords: ["Jaime Díaz", "Desarrollador Backend", "IA aplicada", "NestJS", "PostgreSQL", "Docker"],
};

export default function About() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* fondo sutil con gradiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-zinc-100/60 to-transparent dark:via-zinc-900/60"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <header className="mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800">
              <Dot /> Disponible para proyectos interesantes
            </span>

            <h1
              id="about-heading"
              className="mt-4 text-4xl/tight font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              Sobre mí
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-zinc-700 dark:text-zinc-300">
              Hola, soy <strong>Jaime Roberto Díaz</strong>, desarrollador
              <span className="whitespace-nowrap"> backend</span> con foco en
              construir APIs robustas y productos reales. Trabajo principalmente
              con <b>NestJS</b>, <b>PostgreSQL</b> y <b>Docker</b>, y estoy
              llevando mi perfil hacia <b>IA aplicada</b> (RAG, fine‑tuning y
              despliegue). Me mueven la claridad, la simplicidad y que las
              cosas <em>funcionen</em> en producción.
            </p>
          </header>

          {/* Grid principal */}
          <div className="grid gap-8 md:grid-cols-5">
            {/* Columna izquierda: story + chips */}
            <div className="md:col-span-3 space-y-8">
              <Card>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Lo que hago
                </h2>
                <p className="mt-3 text-zinc-700 dark:text-zinc-300">
                  Diseño y desarrollo APIs limpias, seguras y medibles. Me
                  preocupo por los detalles: logs, trazas, manejo de errores,
                  paginación, timeouts y documentación. En el lado de IA, estoy
                  construyendo piezas que <b>responden preguntas sobre
                  documentos</b> (RAG) y pruebo{" "}
                  <span className="whitespace-nowrap">fine‑tuning</span> para
                  dominios específicos en español.
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {[
                    "NestJS",
                    "TypeScript",
                    "PostgreSQL",
                    "Docker",
                    "Kubernetes (aprendiendo)",
                    "Auth/JWT",
                    "Testing",
                    "RAG (FAISS/Embeddings)",
                    "OpenAI/LLMs",
                  ].map((tag) => (
                    <Chip key={tag} label={tag} />
                  ))}
                </ul>
              </Card>

              <Card>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Proyecto actual
                </h2>
                <p className="mt-3 text-zinc-700 dark:text-zinc-300">
                  <b>Gestor de documentos con IA</b>: plataforma para almacenar,
                  versionar y <i>consultar</i> documentos vía lenguaje natural.
                  Arquitectura con API <b>NestJS</b>, <b>PostgreSQL</b>, y
                  embeddings para búsqueda semántica. En el roadmap:{" "}
                  <b>agente</b> para flujos (seguimiento y acciones),
                  exportación PDF/Excel y pipeline de{" "}
                  <span className="whitespace-nowrap">fine‑tuning</span> en
                  español.
                </p>
                <ul className="mt-5 list-disc pl-5 text-zinc-700 dark:text-zinc-300">
                  <li>Rendimiento y observabilidad primero</li>
                  <li>Versionado de documentos y estados</li>
                  <li>Autenticación y permisos por rol</li>
                </ul>
              </Card>
            </div>

            {/* Columna derecha: quick facts */}
            <aside className="md:col-span-2 space-y-8">
              <ProfileCard />

              <Card>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Fortalezas
                </h3>
                <ul className="mt-4 space-y-3 text-zinc-700 dark:text-zinc-300">
                  <Fact icon={<Check />} text="Backend sólido (NestJS + SQL)" />
                  <Fact icon={<Check />} text="Diseño de endpoints claros" />
                  <Fact icon={<Check />} text="Seguridad y buenas prácticas" />
                  <Fact icon={<Check />} text="RAG y NLP en español" />
                </ul>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Fuera del teclado
                </h3>
                <ul className="mt-4 space-y-3 text-zinc-700 dark:text-zinc-300">
                  <Fact icon={<Bolt />} text="Lo‑fi & synthwave enjoyer" />
                  <Fact icon={<Bike />} text="Vuelvo a la bici poco a poco" />
                  <Fact icon={<MapPin />} text="Frutillar, Chile" />
                </ul>
              </Card>
            </aside>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href="mailto:contacto@tucorreo.cl"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-zinc-50 shadow hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition"
            >
              <Spark /> Hablemos de tu proyecto
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:text-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900/60 transition"
            >
              <File /> Ver CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pequeños componentes UI sin dependencias ---------- */

// ⬇️ TIPAR children
type CardProps = { children: ReactNode };
function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:bg-zinc-900/60 dark:border-zinc-800">
      {children}
    </div>
  );
}

// ⬇️ TIPAR label
type ChipProps = { label: string };
function Chip({ label }: ChipProps) {
  return (
    <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 dark:border-zinc-800">
      {label}
    </span>
  );
}

// ⬇️ TIPAR icon y text
type FactProps = { icon: ReactNode; text: string };
function Fact({ icon, text }: FactProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5">{icon}</span>
      <span>{text}</span>
    </li>
  );
}

function ProfileCard() {
  return (
    <Card>
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-bold">
          JRD
        </div>
        <div>
          <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Jaime Roberto Díaz
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Backend Developer · IA aplicada
          </p>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/60">
          <dt className="text-zinc-500 dark:text-zinc-400">Stack base</dt>
          <dd className="font-medium text-zinc-900 dark:text-zinc-100">
            NestJS · TS · SQL
          </dd>
        </div>
        <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/60">
          <dt className="text-zinc-500 dark:text-zinc-400">Infra</dt>
          <dd className="font-medium text-zinc-900 dark:text-zinc-100">
            Docker · K8s (en curso)
          </dd>
        </div>
        <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/60">
          <dt className="text-zinc-500 dark:text-zinc-400">IA</dt>
          <dd className="font-medium text-zinc-900 dark:text-zinc-100">
            RAG · Embeddings
          </dd>
        </div>
        <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800/60">
          <dt className="text-zinc-500 dark:text-zinc-400">Actual</dt>
          <dd className="font-medium text-zinc-900 dark:text-zinc-100">
            Gestor docs + agente
          </dd>
        </div>
      </dl>
    </Card>
  );
}

/* ---------- Iconos SVG minimal (sin dependencias) ---------- */
function Dot() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="opacity-70">
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
}
function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="text-emerald-600 dark:text-emerald-400">
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function Bolt() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="text-amber-500 dark:text-amber-400">
      <path
        d="M13 2L3 14h7l-1 8 11-14h-7l0-6z"
        fill="currentColor"
      />
    </svg>
  );
}
function Bike() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="text-cyan-600 dark:text-cyan-400">
      <path
        d="M5 17a4 4 0 118 0 4 4 0 01-8 0zm14 0a4 4 0 11-8 0 4 4 0 018 0zM12 17h2l-3-7h-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MapPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="text-fuchsia-600 dark:text-fuchsia-400">
      <path
        d="M12 21s7-5.33 7-11a7 7 0 10-14 0c0 5.67 7 11 7 11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}
function Spark() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" className="opacity-90">
      <path
        d="M10 2l1.2 3.6L15 7l-3.8 1.4L10 12l-1.2-3.6L5 7l3.8-1.4L10 2zM4 12l.8 2.4L7 15l-2 .8L4 18l-.8-2.2L1 15l2.2-.6L4 12zm12 0l.8 2.4L19 15l-2 .8L16 18l-.8-2.2L13 15l2.2-.6L16 12z"
        fill="currentColor"
      />
    </svg>
  );
}
function File() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" className="opacity-90">
      <path
        d="M6 2h5l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M11 2v5h5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
