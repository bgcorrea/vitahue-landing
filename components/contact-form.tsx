'use client';

import { useState } from 'react';

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
};

type FormErrors = {
  nombre?: string;
  email?: string;
  telefono?: string;
  servicio?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
      isValid = false;
    } else if (formData.nombre.length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
      isValid = false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido';
      isValid = false;
    }

    // Validar teléfono
    const phoneRegex = /^[0-9]{8,10}$/;
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El número telefónico es requerido';
      isValid = false;
    } else if (!phoneRegex.test(formData.telefono.replace(/\D/g, ''))) {
      newErrors.telefono = 'Ingrese un número telefónico válido (8-10 dígitos)';
      isValid = false;
    }

    // Validar servicio
    if (!formData.servicio.trim()) {
      newErrors.servicio = 'Debe seleccionar un servicio';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpiar error del campo cuando el usuario comienza a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    try {
      // Aquí iría la lógica para enviar el formulario a un servidor
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cotizacion" className="bg-tierra-50 py-12 pt-24 sm:pt-28 md:pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tierra-900 mb-4">Solicita una Cotización</h2>
          <p className="text-tierra-600">Completa el formulario y nos pondremos en contacto contigo</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
          {submitSuccess ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
              <p className="font-medium">¡Gracias por tu solicitud!</p>
              <p>Nos pondremos en contacto contigo a la brevedad para discutir los detalles de tu proyecto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-tierra-800 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-tierra-500 focus:border-tierra-500 ${
                    errors.nombre ? 'border-red-500' : 'border-tierra-300'
                  }`}
                  placeholder="Ingresa tu nombre completo"
                />
                {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-tierra-800 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-tierra-500 focus:border-tierra-500 ${
                    errors.email ? 'border-red-500' : 'border-tierra-300'
                  }`}
                  placeholder="ejemplo@correo.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-tierra-800 mb-1">
                  Número telefónico
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-tierra-500 focus:border-tierra-500 ${
                    errors.telefono ? 'border-red-500' : 'border-tierra-300'
                  }`}
                  placeholder="+569 1234 5678"
                />
                {errors.telefono && <p className="mt-1 text-sm text-red-600">{errors.telefono}</p>}
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-tierra-800 mb-1">
                  Servicio requerido
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-tierra-500 focus:border-tierra-500 ${
                    errors.servicio ? 'border-red-500' : 'border-tierra-300'
                  }`}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="excavacion">Excavación</option>
                  <option value="movimiento-tierras">Movimiento de tierras</option>
                  <option value="demolicion">Demolición</option>
                  <option value="construccion">Construcción</option>
                  <option value="otros">Otros servicios</option>
                </select>
                {errors.servicio && <p className="mt-1 text-sm text-red-600">{errors.servicio}</p>}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-tierra-600 hover:bg-tierra-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
} 