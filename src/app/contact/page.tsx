import React from "react";

export const metadata = {
  title: "Contacto - Jaime Díaz",
  description: "Puedes ponerte en contacto conmigo para hacer preguntas o compartir tus proyectos.",
  keywords: ["Jaime Díaz", "Desarrollador Backend", "IA aplicada", "NestJS", "PostgreSQL", "Docker"],
};

export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="text-lg text-gray-700 mb-6">
        ¿Quieres ponerte en contacto conmigo? Puedes escribirme directamente a mi correo:
      </p>
      <div className="bg-card text-card-foreground rounded-xl border py-6 px-8 shadow-sm flex flex-col items-center">
        <span className="text-xl font-semibold mb-2">Email</span>
        <a href="mailto:james18bt@gmail.com" className="text-blue-600 hover:underline text-lg">james18bt@gmail.com</a>
      </div>
    </section>
  );
}