import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  { tag: 'Guide', title: 'The 10-Minute Workplace Evacuation Plan', date: 'Oct 12, 2023', img: 'https://images.unsplash.com/photo-1542314831-c6a4d14eff50?q=80&w=800&auto=format&fit=crop' },
  { tag: 'Checklist', title: 'Essential Items for Your Corporate Go-Bag', date: 'Sep 28, 2023', img: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=800&auto=format&fit=crop' },
  { tag: 'Compliance', title: 'Navigating OSHA First Aid Requirements', date: 'Sep 15, 2023', img: 'https://images.unsplash.com/photo-1582131503261-f09d816401f6?q=80&w=800&auto=format&fit=crop' },
  { tag: 'Planning', title: 'How to Conduct a Fire Drill That Actually Works', date: 'Aug 30, 2023', img: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=800&auto=format&fit=crop' },
  { tag: 'Health', title: 'Understanding PPE Ratings and Standards', date: 'Aug 12, 2023', img: 'https://images.unsplash.com/photo-1583947581924-860bda6a45df?q=80&w=800&auto=format&fit=crop' },
  { tag: 'Disaster', title: 'Preparing Your Facility for Severe Weather', date: 'Jul 22, 2023', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop' },
];

export default function Hub() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-6">Preparedness Hub</h1>
          <p className="text-xl text-gray-cool max-w-2xl">
            Expert insights, planning guides, and safety protocols to keep you ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to="#" className="group block h-full flex flex-col">
                <div className="aspect-video overflow-hidden mb-6 border border-white/10">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                </div>
                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-3">{post.tag}</div>
                <h3 className="font-display font-bold text-2xl leading-tight mb-4 group-hover:text-primary transition-colors flex-grow">{post.title}</h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <span className="text-gray-cool text-sm">{post.date}</span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
