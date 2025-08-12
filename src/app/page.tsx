

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="max-w-xl w-full space-y-4">
        <h1 className="text-3xl font-bold">Hola, soy Jaime, Desarrollador Backend — portafolio</h1>
        <p className="text-sm text-muted-foreground">
          Next.js + TS + Tailwind + shadcn/ui funcionando.
        </p>
        <a href="https://github.com" target="_blank" className="inline-block">
          <button className="px-4 py-2 rounded-md border">
            Ver mi GitHub
          </button>
        </a>
      </div>
    </main>
  )
}