"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StartProjectPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    details: "",
  });

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("access_key", "d481b29c-1000-4260-8664-81de7e7c7fbd");
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("company", formData.company);
      data.append("projectType", formData.projectType);
      data.append("details", formData.details);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("¡Hemos recibido tu solicitud! Te contactaremos a la brevedad.");
        window.location.href = "/";
      } else {
        alert("Hubo un problema al enviar. Por favor intenta de nuevo.");
      }
    } catch (error) {
      alert("Error de red. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 font-sans transition-colors duration-300">
      {/* Back to home */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
      </div>

      <div className="w-full max-w-lg">
        {/* Stepper Header (Circles) */}
        <div className="flex items-center justify-center mb-12 relative w-2/3 mx-auto">
          {/* Progress lines */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-6 -z-10">
            <div className={`h-[2px] w-full ${step >= 2 ? 'bg-primary' : 'bg-muted'} transition-colors duration-500`} />
            <div className={`h-[2px] w-full ${step >= 3 ? 'bg-primary' : 'bg-muted'} transition-colors duration-500`} />
          </div>

          <div className="flex justify-between w-full relative z-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step === i
                    ? "bg-primary text-primary-foreground shadow-md ring-4 ring-primary/20"
                    : step > i
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
              >
                {i}
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="relative w-full">
          {/* Top Progress Line matching the reference image */}
          <div className="w-full h-[2px] bg-muted mb-8 flex">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <form onSubmit={step === totalSteps ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>

                {/* Step Title & Counter */}
                <div className="mb-6 flex justify-between items-end">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {step === 1 && "Información de Contacto"}
                    {step === 2 && "Sobre el Proyecto"}
                    {step === 3 && "Detalles Finales"}
                  </h2>
                  <span className="text-sm font-medium text-neutral-500">
                    {step}/{totalSteps}
                  </span>
                </div>

                {/* Content Area */}
                <div className="space-y-6 min-h-[220px]">
                  {step === 1 && (
                    <>
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tu nombre completo"
                          className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm md:text-base"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Tu número de teléfono"
                          className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm md:text-base"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tucorreo@ejemplo.com"
                          className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm md:text-base"
                        />
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Nombre de tu empresa o marca"
                          className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm md:text-base"
                        />
                      </div>
                      <div>
                        <select
                          required
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className={`w-full bg-card border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none cursor-pointer text-sm md:text-base ${formData.projectType === "" ? "text-muted-foreground" : "text-foreground"}`}
                        >
                          <option value="" disabled className="text-muted-foreground">¿Qué tipo de proyecto necesitas?</option>
                          <option value="landing">Landing Page (Marketing & Conversión)</option>
                          <option value="ecommerce">E-Commerce (Tienda online)</option>
                          <option value="webapp">Web App a medida (SaaS, Portal)</option>
                          <option value="other">Otro / Aún no lo sé con certeza</option>
                        </select>
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div>
                        <textarea
                          rows={5}
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          placeholder="Cuéntanos más sobre tus objetivos, ideas, plazos o si tienes un diseño de referencia (Opcional)"
                          className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none text-sm md:text-base"
                        />
                      </div>
                    </>
                  )}


                </div>

                {/* Footer Buttons */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="w-1/3">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="text-muted-foreground font-medium hover:text-foreground transition-colors text-sm"
                      >
                        ← Volver
                      </button>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {step === totalSteps ? (isSubmitting ? "Enviando..." : "Enviar") : "Continuar"}
                    {step < totalSteps && <ArrowRight className="w-4 h-4 text-primary-foreground" />}
                  </button>
                </div>
              </form>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
