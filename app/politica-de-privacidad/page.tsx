import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowLeft, IconShieldLock } from "@tabler/icons-react";

const sections = [
  {
    title: "1. Información que recopilamos",
    content: [
      "Recopilamos los datos que proporcionas al crear tu cuenta o usar la app, como nombre, correo electrónico asociado a Google, foto de perfil, ciudad o zona, datos de contacto y la información que agregas sobre tus mascotas.",
      "También tratamos contenido que subes voluntariamente, incluyendo fotografías, descripciones, reportes de mascotas perdidas o encontradas, ubicaciones aproximadas o precisas, comentarios y material compartido dentro de la comunidad.",
    ],
  },
  {
    title: "2. Datos de ubicación",
    content: [
      "La app puede solicitar acceso a la ubicación del dispositivo para mostrar reportes cercanos, mejorar la visualización en el mapa y activar alertas en tu zona. La ubicación se usa para el funcionamiento principal del servicio y solo se procesa cuando otorgas ese permiso.",
      "Cuando publicas un reporte, puedes compartir una ubicación referencial o precisa. Esa información podrá ser visible para otros usuarios según la naturaleza del reporte y la configuración del producto.",
    ],
  },
  {
    title: "3. Cómo usamos tu información",
    content: [
      "Usamos los datos personales y de uso para autenticar tu acceso, crear tu perfil, registrar tus mascotas, mostrar publicaciones de mascotas perdidas o encontradas, enviar alertas cercanas, facilitar la colaboración entre usuarios y prevenir abuso o fraude dentro de la plataforma.",
      "Durante la etapa MVP, también podremos utilizar información agregada o anonimizada para analizar participación, validar el problema del producto y mejorar la experiencia general de la app.",
    ],
  },
  {
    title: "4. Compartición de información",
    content: [
      "Compartimos cierta información con otros usuarios cuando es necesaria para la finalidad comunitaria de la app, por ejemplo en reportes públicos de mascotas perdidas o encontradas, fotografías, nombre de la mascota, zona del evento y medios de contacto habilitados por ti.",
      "También podemos compartir datos con proveedores tecnológicos que operan la plataforma, como servicios de autenticación, base de datos, almacenamiento de imágenes, mapas, notificaciones push y analítica, bajo obligaciones de confidencialidad y tratamiento adecuado.",
    ],
  },
  {
    title: "5. Integraciones y terceros",
    content: [
      "La app puede apoyarse en proveedores como Google para inicio de sesión, Supabase para autenticación, base de datos, almacenamiento y servicios en tiempo real, y herramientas complementarias para mapas, notificaciones y compartición por canales externos como WhatsApp o Facebook.",
      "El uso de esos servicios también puede estar sujeto a sus propias políticas de privacidad. Recomendamos revisarlas antes de utilizar integraciones externas desde la app.",
    ],
  },
  {
    title: "6. Conservación de datos",
    content: [
      "Conservamos la información mientras tu cuenta permanezca activa o mientras sea necesaria para operar la plataforma, resolver incidencias, cumplir obligaciones legales y proteger la seguridad de la comunidad.",
      "Podemos conservar ciertos registros mínimos por un plazo adicional cuando resulte necesario para auditoría, prevención de fraude, cumplimiento legal o resolución de disputas.",
    ],
  },
  {
    title: "7. Seguridad",
    content: [
      "Aplicamos medidas razonables de seguridad técnicas y organizativas para proteger tu información frente a accesos no autorizados, pérdida, alteración o divulgación indebida. Sin embargo, ningún sistema en línea puede garantizar seguridad absoluta.",
      "Te recomendamos mantener actualizado tu dispositivo, proteger el acceso a tu cuenta de Google y no publicar información sensible innecesaria dentro de reportes o mensajes comunitarios.",
    ],
  },
  {
    title: "8. Tus derechos y controles",
    content: [
      "Puedes solicitar acceso, actualización o eliminación de tu información personal, así como revocar permisos de ubicación o notificaciones desde tu dispositivo, sujeto a los límites técnicos y legales aplicables.",
      "Si deseas ejercer estos derechos o tienes dudas sobre el tratamiento de tus datos, puedes contactarnos a través del canal publicado en la aplicación o en el sitio oficial del proyecto.",
    ],
  },
  {
    title: "9. Datos de menores",
    content: [
      "La app está pensada para ser utilizada por personas con capacidad legal suficiente para aceptar esta política. Si detectamos que se han recopilado datos personales de menores sin la autorización correspondiente, podremos eliminar la cuenta o restringir el tratamiento de esa información.",
    ],
  },
  {
    title: "10. Cambios a esta política",
    content: [
      "Podremos actualizar esta política de privacidad para reflejar cambios en la app, nuevas funcionalidades, obligaciones legales o mejoras en nuestras prácticas. Cuando el cambio sea relevante, lo comunicaremos por medios razonables dentro de la plataforma.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Política de Privacidad | App para Mascotas",
  description:
    "Política de privacidad de la app comunitaria para mascotas perdidas y encontradas.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-grid-soft bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <section className="border-b border-gray-200 bg-white/90 py-6 dark:border-gray-800 dark:bg-gray-950/90">
        <div className="container-custom flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-eyebrow text-primary">Documento legal</p>
            <h1 className="section-title mt-3">
              Política de privacidad Aplicación Mis Mascotas
            </h1>
            <p className="section-copy mt-4 max-w-3xl">
              Esta política describe cómo la app Mis Mascotas recopila, utiliza,
              protege y comparte la información de personas que usan la
              plataforma para registrar mascotas, publicar reportes y colaborar
              en la búsqueda de animales perdidos o encontrados.
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
                <IconShieldLock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">
                  Última actualización
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  22 de mayo de 2026. Al usar la aplicación aceptas esta
                  política de privacidad y el tratamiento de datos necesario
                  para operar las funciones principales del servicio.
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
              Contacto sobre privacidad
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300">
              Si necesitas ejercer derechos sobre tus datos, reportar un
              incidente o solicitar aclaraciones sobre esta política, habilita
              un canal oficial de contacto en el sitio o dentro de la app, por
              ejemplo un correo de soporte o formulario de atención.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300">
              Antes de publicar reportes, evita incluir direcciones exactas,
              documentos personales, datos bancarios u otra información sensible
              que no sea necesaria para encontrar a la mascota.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
