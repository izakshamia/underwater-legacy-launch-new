
import React from 'react';
import { X } from 'lucide-react';
import GoldButton from '@/components/GoldButton';
import { SpeakerType } from '@/types/speaker';

interface SpeakerModalProps {
  speaker: SpeakerType | null;
  onClose: () => void;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {
  if (!speaker) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-navy-dark/90 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full glass-card p-0 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 z-20 text-white hover:text-gold-light transition-colors bg-navy-dark/50 rounded-full p-1"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 relative">
            <div className="aspect-[3/4] md:h-full">
              <img 
                src={speaker.imageSrc} 
                alt={speaker.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-6 md:p-8 md:w-3/5">
            <div className="mb-2">
              <span className="px-2 py-1 bg-gold-dark/20 text-gold-light text-xs rounded-full">
                {speaker.featured ? "Special Guest" : "Speaker"}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-1">
              {speaker.name}
            </h3>
            <p className="text-gold-light text-sm mb-4">{speaker.title}</p>
            <p className="text-white/80 mb-6">
              {speaker.description}
              {speaker.featured && (
                <>
                  <br /><br />
                  Join us for an insightful session with {speaker.name} as they share their journey from military service to entrepreneurial success.
                </>
              )}
            </p>
            <GoldButton variant="outline" showArrow>
              More Details
            </GoldButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
