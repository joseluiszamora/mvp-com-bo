import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowLeft, IconFileDescription } from "@tabler/icons-react";

const sections = [
  {
    title: "1. Aceptación de los términos",
    content: [
      "Al acceder, registrarte o usar la app para mascotas, aceptas estos términos y condiciones. Si no estás de acuerdo con ellos, no debes utilizar la plataforma.",
      "Estos términos regulan el uso de la aplicación comunitaria destinada al registro de mascotas, publicación de reportes de mascotas perdidas o encontradas, visualización en mapa, recepción de alertas cercanas y colaboración entre usuarios.",
    ],
  },
  {
    title: "2. Elegibilidad y cuenta de usuario",
    content: [
      "Para usar la app debes contar con capacidad legal suficiente para aceptar estos términos. El acceso inicial puede realizarse mediante autenticación con Google u otros mecanismos habilitados por el producto.",
      "Eres responsable de mantener actualizada y veraz la información de tu perfil, así como de custodiar el acceso a tu cuenta y cualquier actividad realizada desde ella.",
    ],
  },
  {
    title: "3. Uso permitido de la plataforma",
    content: [
      "La app debe utilizarse exclusivamente para fines legítimos relacionados con el cuidado comunitario de mascotas, como registrar animales propios, publicar reportes reales, compartir avistamientos y colaborar en la recuperación de mascotas extraviadas.",
      "No está permitido usar la plataforma para engañar, acosar, suplantar identidad, publicar información falsa, difundir contenido ilegal o interferir con el funcionamiento normal del servicio.",
    ],
  },
  {
    title: "4. Publicación de reportes y contenido",
    content: [
      "Eres responsable del contenido que publiques, incluyendo fotos, descripciones, ubicaciones, datos de contacto, comentarios y cualquier otra información subida a la app. Debes contar con los derechos, permisos o legitimidad necesarios para publicar dicho contenido.",
      "Los reportes de mascotas perdidas o encontradas deben ser veraces, relevantes y suficientemente claros. Nos reservamos el derecho de moderar, ocultar o eliminar contenido que resulte falso, engañoso, ofensivo, riesgoso o contrario a estos términos.",
    ],
  },
  {
    title: "5. Ubicación, mapas y alertas",
    content: [
      "La plataforma puede utilizar datos de ubicación para mostrar reportes cercanos, mejorar la experiencia del mapa y enviar alertas relevantes según tu zona. Algunas funciones pueden no operar correctamente si rechazas esos permisos.",
      "Eres responsable de revisar cuidadosamente la información antes de publicar una ubicación precisa. No recomendamos exponer direcciones exactas, rutinas personales u otros datos sensibles cuando no sean estrictamente necesarios para encontrar a la mascota.",
    ],
  },
  {
    title: "6. Interacciones entre usuarios",
    content: [
      "La app facilita conexiones entre personas de la comunidad, pero no garantiza el comportamiento, identidad, intención o veracidad absoluta de terceros. Cualquier contacto, encuentro, entrega o coordinación entre usuarios se realiza bajo su propia responsabilidad.",
      "Te recomendamos verificar información relevante antes de concretar interacciones fuera de la plataforma y actuar con criterios razonables de seguridad personal.",
    ],
  },
  {
    title: "7. Propiedad intelectual y licencia de uso",
    content: [
      "La app, su diseño, marca, funcionalidades, textos, interfaces y componentes tecnológicos pertenecen a sus titulares o licenciantes y están protegidos por la normativa aplicable.",
      "Conservas la titularidad sobre el contenido que publiques, pero otorgas a la plataforma una licencia no exclusiva, mundial, revocable en la medida permitida y necesaria para alojar, procesar, mostrar y distribuir ese contenido dentro del servicio con la finalidad de operar la app.",
    ],
  },
  {
    title: "8. Suspensión y terminación",
    content: [
      "Podemos suspender, restringir o cancelar cuentas, reportes o accesos cuando existan indicios de uso indebido, fraude, incumplimiento de estos términos, riesgos para la comunidad o requerimientos legales u operativos.",
      "También podrás dejar de usar la plataforma en cualquier momento, sin perjuicio de que ciertos registros mínimos deban conservarse por razones legales, de seguridad o integridad del servicio.",
    ],
  },
  {
    title: "9. Disponibilidad y cambios del servicio",
    content: [
      "La aplicación se ofrece sobre una base de disponibilidad razonable, especialmente durante la etapa MVP. Podemos modificar, suspender, mejorar o retirar funciones en cualquier momento para evolucionar el producto, corregir errores o validar hipótesis del servicio.",
      "No garantizamos disponibilidad permanente, ausencia total de errores, compatibilidad con todos los dispositivos o resultados concretos en la recuperación de mascotas.",
    ],
  },
  {
    title: "10. Limitación de responsabilidad",
    content: [
      "En la medida permitida por la ley aplicable, la plataforma no será responsable por pérdidas indirectas, incidentales, consecuenciales o derivadas del uso o imposibilidad de uso del servicio, ni por hechos atribuibles a terceros usuarios, canales externos o eventos fuera de control razonable.",
      "La app funciona como una herramienta tecnológica de apoyo comunitario y no reemplaza la verificación personal, el criterio del usuario, la denuncia ante autoridades ni otros mecanismos formales de búsqueda cuando correspondan.",
    ],
  },
  {
    title: "11. Privacidad y datos personales",
    content: [
      "El tratamiento de datos personales se rige además por la política de privacidad de la plataforma. Al usar la app, reconoces que ciertos datos son necesarios para autenticar tu cuenta, operar funcionalidades principales y habilitar la colaboración comunitaria.",
    ],
  },
  {
    title: "12. Modificaciones a estos términos",
    content: [
      "Podremos actualizar estos términos y condiciones para reflejar cambios funcionales, legales, comerciales o técnicos. Cuando resulte apropiado, comunicaremos las actualizaciones por medios razonables dentro de la app o el sitio asociado.",
      "El uso continuado de la plataforma después de la entrada en vigor de una versión actualizada implicará la aceptación de los nuevos términos, salvo que la ley exija un mecanismo distinto.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Términos y Condiciones | App para Mascotas",
  description:
    "Términos y condiciones de uso de la app comunitaria para mascotas perdidas y encontradas.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-grid-soft bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <section className="border-b border-gray-200 bg-white/90 py-6 dark:border-gray-800 dark:bg-gray-950/90">
        <div className="container-custom flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-eyebrow text-primary">Documento legal</p>
            <h1 className="section-title mt-3">
              Términos y condiciones Aplicación Mis Mascotas
            </h1>
            <p className="section-copy mt-4 max-w-3xl">
              Estos términos regulan el acceso y uso de la aplicación Mis
              Mascotas para registrar mascotas, reportar pérdidas o
              avistamientos, recibir alertas y colaborar con otras personas en
              la búsqueda de animales extraviados o encontrados.
            </p>
          </div>

          <Link href="/" className="btn-primary">
            <IconArrowLeft className="h-5 w-5" />
            Volver al inicio
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-8">
          <div className="surface-card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary p-3 text-white shadow-md">
                <IconFileDescription className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">
                  Última actualización
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  22 de mayo de 2026. El uso de la app implica la aceptación de
                  estas condiciones en la medida permitida por la ley aplicable.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {sections.map((section) => (
              <article key={section.title} className="surface-card p-6 md:p-8">
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
                <div className="mt-4 grid gap-4">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-gray-600 dark:text-gray-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="surface-card p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
              Contacto y cumplimiento
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300">
              Si necesitas realizar consultas sobre estos términos, reportar un
              abuso o solicitar revisión de una medida de moderación, habilita
              un canal oficial de soporte dentro del producto o en el sitio
              institucional.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300">
              Si operas la app en una jurisdicción específica, conviene revisar
              este texto con asesoría legal local antes del lanzamiento público.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
