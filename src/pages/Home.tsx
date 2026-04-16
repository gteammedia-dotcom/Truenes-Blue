import { motion } from 'motion/react';
import { Shield, Flame, Activity, Wind, HardHat, ArrowRight, CheckCircle2, ShieldAlert, Building2, Stethoscope, GraduationCap, Landmark, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2883&auto=format&fit=crop" 
            alt="Emergency Responders" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm font-medium mb-6 uppercase tracking-widest">
              <ShieldAlert className="w-4 h-4" />
              <span>Prepared for What Matters Most</span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 uppercase tracking-tighter">
              Protection.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Preparedness.</span><br />
              Peace of Mind.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-cool mb-10 max-w-2xl leading-relaxed">
              Advanced safety, health, and emergency solutions built to keep people, businesses, and communities ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all hover-glow text-center flex items-center justify-center gap-2">
                Shop Solutions <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/hub" className="border border-white/20 hover:border-white hover:bg-white/5 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all text-center">
                Explore Preparedness
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUICK ACCESS FEATURE BLOCKS */}
      <section className="relative z-20 -mt-20 max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { icon: Activity, title: 'First Aid & Emergency', color: 'text-red-400' },
            { icon: Flame, title: 'Fire Safety', color: 'text-orange-400' },
            { icon: Shield, title: 'PPE & Protection', color: 'text-primary' },
            { icon: Wind, title: 'Disaster Prep', color: 'text-teal-400' },
            { icon: HardHat, title: 'Workplace Safety', color: 'text-yellow-400' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to="/shop" className="group block h-full">
                <div className="bg-navy border border-white/10 p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:bg-white/5 hover:border-primary/50 hover:-translate-y-2">
                  <feature.icon className={cn("w-12 h-12 mb-4 transition-transform group-hover:scale-110", feature.color)} />
                  <h3 className="font-display font-bold uppercase tracking-wider text-sm">{feature.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHY TRUENESS BLUE */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-4">Why Trueness Blue</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Built for Real Emergencies', desc: 'Tested in the harshest conditions to ensure reliability when it counts.' },
              { title: 'Certified Products', desc: 'Meeting and exceeding global safety and health standards.' },
              { title: 'Scalable Solutions', desc: 'From single households to enterprise-level organizational readiness.' },
              { title: 'Trusted Supply Chain', desc: 'Fast, reliable delivery of critical supplies during crises.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-6 text-primary">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wider mb-3">{item.title}</h3>
                <p className="text-gray-cool text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED SOLUTIONS */}
      <section className="py-32 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-4">Featured Solutions</h2>
              <p className="text-gray-cool max-w-xl">Professional-grade equipment for comprehensive preparedness.</p>
            </div>
            <Link to="/shop" className="text-primary font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:text-white transition-colors">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Enterprise Trauma Kit Pro', desc: 'Comprehensive medical response for up to 50 people.', img: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=800&auto=format&fit=crop' },
              { name: 'Industrial Fire Suppression', desc: 'Advanced chemical suppression for high-risk environments.', img: 'https://images.unsplash.com/photo-1582131503261-f09d816401f6?q=80&w=800&auto=format&fit=crop' },
              { name: '72-Hour Command Center', desc: 'Self-sustaining communication and power hub.', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop' },
            ].map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-navy border border-white/10 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl uppercase tracking-wider mb-2">{product.name}</h3>
                  <p className="text-gray-cool text-sm mb-6">{product.desc}</p>
                  <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:text-white transition-colors">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMMERSIVE SECTION */}
      <section className="relative py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14eff50?q=80&w=2883&auto=format&fit=crop" 
            alt="Preparedness Training" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy-dark/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-transparent to-navy-dark" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-6">
              Be Ready Before<br />It Happens
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Preparedness is not a product; it's a mindset. Equip your team with the tools and knowledge to handle any crisis with confidence.
            </p>
            <Link to="/hub" className="inline-block bg-white text-navy-dark px-10 py-5 rounded-sm font-bold uppercase tracking-wider transition-all hover:bg-primary hover:text-white">
              Start Your Readiness Plan
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-4">Industries We Protect</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Building2, name: 'Corporate' },
              { icon: Stethoscope, name: 'Healthcare' },
              { icon: GraduationCap, name: 'Education' },
              { icon: Landmark, name: 'Government' },
              { icon: HomeIcon, name: 'Residential' },
            ].map((industry, i) => (
              <Link key={i} to="/industries" className="group block">
                <div className="border border-white/10 p-8 flex flex-col items-center text-center transition-all hover:bg-primary hover:border-primary">
                  <industry.icon className="w-10 h-10 mb-4 text-gray-cool group-hover:text-white transition-colors" />
                  <h3 className="font-display font-bold uppercase tracking-wider text-sm">{industry.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PREPAREDNESS HUB */}
      <section className="py-32 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-4">Preparedness Hub</h2>
              <p className="text-gray-cool max-w-xl">Expert insights, planning guides, and safety protocols.</p>
            </div>
            <Link to="/hub" className="text-primary font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:text-white transition-colors">
              Read All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tag: 'Guide', title: 'The 10-Minute Workplace Evacuation Plan', date: 'Oct 12, 2023' },
              { tag: 'Checklist', title: 'Essential Items for Your Corporate Go-Bag', date: 'Sep 28, 2023' },
              { tag: 'Compliance', title: 'Navigating OSHA First Aid Requirements', date: 'Sep 15, 2023' },
            ].map((post, i) => (
              <Link key={i} to="/hub" className="group block border-t border-white/10 pt-6">
                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-3">{post.tag}</div>
                <h3 className="font-display font-bold text-2xl leading-tight mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                <div className="text-gray-cool text-sm">{post.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STRONG CTA SECTION */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-8 text-white">
            Stay Ready.<br />Stay Protected.
          </h2>
          <Link to="/contact" className="inline-block bg-navy-dark text-white px-12 py-6 rounded-sm font-bold uppercase tracking-wider text-lg transition-all hover:bg-black hover:scale-105">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
