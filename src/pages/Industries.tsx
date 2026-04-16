import { motion } from 'motion/react';
import { Building2, Stethoscope, GraduationCap, Landmark, Home as HomeIcon } from 'lucide-react';

const industries = [
  { icon: Building2, name: 'Corporate & Offices', desc: 'Ensure business continuity and employee safety with tailored evacuation plans, trauma kits, and compliance training.' },
  { icon: Stethoscope, name: 'Healthcare', desc: 'Advanced PPE, specialized fire suppression, and backup power solutions designed for critical care environments.' },
  { icon: GraduationCap, name: 'Schools & Education', desc: 'Protect students and staff with comprehensive lockdown kits, first aid stations, and emergency communication systems.' },
  { icon: Landmark, name: 'Government & Municipal', desc: 'Scalable disaster response equipment and command center setups for city-wide or regional emergencies.' },
  { icon: HomeIcon, name: 'Residential / Family', desc: '72-hour survival kits, home fire safety equipment, and family emergency planning guides.' },
];

export default function Industries() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-6">Industries Served</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl text-gray-cool max-w-2xl mx-auto">
            Tailored preparedness solutions designed for the unique challenges of your sector.
          </p>
        </motion.div>

        <div className="space-y-12">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-center bg-navy-dark border border-white/10 p-8 hover:border-primary/50 transition-colors"
            >
              <div className="w-24 h-24 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <ind.icon className="w-12 h-12" />
              </div>
              <div>
                <h2 className="font-display font-bold text-3xl uppercase tracking-tight mb-4">{ind.name}</h2>
                <p className="text-gray-cool leading-relaxed max-w-3xl">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
