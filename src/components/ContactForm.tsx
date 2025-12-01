'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Resetear el estado después de 5 segundos
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Error de conexión. Intenta nuevamente.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Contáctame
          </h2>
          <p className="text-zinc-400">
            Envíame un mensaje y te responderé lo antes posible
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Tu nombre completo"
              disabled={status === 'loading'}
            />
          </div>

          {/* Email */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="tu@email.com"
              disabled={status === 'loading'}
            />
          </div>

          {/* Mensaje */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              placeholder="Escribe tu mensaje aquí..."
              disabled={status === 'loading'}
            />
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-green-400 text-sm font-medium">
                ✅ ¡Mensaje enviado con éxito! Te responderé pronto.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm font-medium">
                ❌ {errorMessage}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    fill="none"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Enviando...
              </>
            ) : (
              <>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                Enviar mensaje
              </>
            )}
          </button>
        </form>

        {/* Footer Info */}
        <div className="mt-8 pt-6 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm text-center">
            También puedes escribirme directamente a{' '}
            <a 
              href="mailto:contacto@miguelmort.dev" 
              className="text-blue-400 hover:text-blue-300 transition"
            >
              contacto@miguelmort.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
