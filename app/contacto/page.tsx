import ContactForm from '@/components/contact-form';

export const metadata = {
  title: 'Contacto | VITAHUE - Soluciones en Construcción',
  description: 'Solicita una cotización para tus proyectos de construcción. Contáctanos para discutir tus necesidades.',
};

export default function ContactPage() {
  return (
    <section className="py-16 bg-tierra-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-tierra-900 mb-4">
            Solicita una Cotización
          </h1>
          <p className="text-lg text-tierra-700">
            Completa el formulario y nos pondremos en contacto contigo para discutir los detalles de tu proyecto.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
} 