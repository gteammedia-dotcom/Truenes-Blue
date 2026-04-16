import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-8">About Us</h1>
          <div className="w-24 h-1 bg-primary mb-10" />
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Trueness Blue is a trusted provider of safety, protection, and emergency preparedness solutions for businesses, organizations, and households. The brand represents readiness, reliability, and protection when it matters most.
            </p>
            <p className="text-gray-cool leading-relaxed mb-8">
              Our mission is to equip communities with the tools and knowledge they need to face any crisis. We believe that preparedness is not just about having the right gear; it's about cultivating a mindset of readiness and resilience.
            </p>
            <h2 className="font-display font-bold text-3xl uppercase tracking-tight mt-16 mb-6 text-white">Our Core Values</h2>
            <ul className="space-y-4 text-gray-cool">
              <li><strong className="text-white">Reliability:</strong> We provide equipment you can trust when lives are on the line.</li>
              <li><strong className="text-white">Readiness:</strong> We emphasize proactive planning over reactive scrambling.</li>
              <li><strong className="text-white">Protection:</strong> We are committed to safeguarding people, assets, and communities.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
