import { motion } from 'motion/react';
import { ArrowRight, Filter, Loader2 } from 'lucide-react';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Enterprise Trauma Kit Pro', category: 'First Aid', price: '$499', img: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Industrial Fire Suppression', category: 'Fire Safety', price: '$850', img: 'https://images.unsplash.com/photo-1582131503261-f09d816401f6?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: '72-Hour Command Center', category: 'Disaster Prep', price: '$1,200', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Personal Responder Kit', category: 'First Aid', price: '$149', img: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'Hazmat Suit Level A', category: 'PPE', price: '$899', img: 'https://images.unsplash.com/photo-1583947581924-860bda6a45df?q=80&w=800&auto=format&fit=crop' },
  { id: 6, name: 'Emergency Comms Radio', category: 'Disaster Prep', price: '$299', img: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?q=80&w=800&auto=format&fit=crop' },
];

export default function Shop() {
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleAddToCart = (id: number) => {
    setLoadingId(id);
    setTimeout(() => setLoadingId(null), 1500);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-4">Solutions</h1>
            <p className="text-gray-cool max-w-xl">Professional-grade equipment for comprehensive preparedness.</p>
          </motion.div>
          
          <button className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-sm hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Filter</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-navy border border-white/10 overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-navy-dark">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{product.category}</div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wider mb-4 flex-grow">{product.name}</h3>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <span className="font-mono text-lg">{product.price}</span>
                  <button 
                    onClick={() => handleAddToCart(product.id)}
                    disabled={loadingId === product.id}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:text-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loadingId === product.id ? 'Adding...' : 'Add to Cart'} 
                    {loadingId === product.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
