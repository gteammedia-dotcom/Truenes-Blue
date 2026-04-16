import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-primary mb-6" />
          <p className="text-xl text-gray-cool max-w-2xl">
            Ready to upgrade your preparedness? Reach out to our team of safety experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-cool">First Name *</label>
                  <input type="text" className="w-full bg-navy-dark border border-white/10 px-4 py-3 focus:outline-none focus:border-primary text-white transition-colors" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-cool">Last Name *</label>
                  <input type="text" className="w-full bg-navy-dark border border-white/10 px-4 py-3 focus:outline-none focus:border-primary text-white transition-colors" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-cool">Email Address *</label>
                <input type="email" className="w-full bg-navy-dark border border-white/10 px-4 py-3 focus:outline-none focus:border-primary text-white transition-colors" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-cool">Organization / Company *</label>
                <input type="text" className="w-full bg-navy-dark border border-white/10 px-4 py-3 focus:outline-none focus:border-primary text-white transition-colors" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-cool">Message</label>
                <textarea rows={5} className="w-full bg-navy-dark border border-white/10 px-4 py-3 focus:outline-none focus:border-primary text-white transition-colors resize-none" required></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 font-bold uppercase tracking-wider transition-all hover-glow w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  'Message Sent!'
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-12">
            <div>
              <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-6">Headquarters</h3>
              <div className="space-y-4 text-gray-cool">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <p>True Touch Collections LLC<br />1A N 9TH Avenue Suite #541<br />Pensacola, FL 32504</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <p>1-800-282-4030</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <p>readiness@truenessblue.com</p>
                </div>
              </div>
            </div>

            <div className="aspect-video bg-navy-dark border border-white/10 relative overflow-hidden">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-cool/50 font-display uppercase tracking-widest">
                Interactive Map Area
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
