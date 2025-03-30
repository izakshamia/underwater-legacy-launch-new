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

  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/90 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-3xl glass-card overflow-hidden p-0"
        onClick={stopPropagation}
      >
        {/* Close Button */}
        <button
          aria-label="Close modal"
          className="absolute top-4 right-4 z-60 bg-navy-dark/70 text-white hover:text-gold-light transition-colors rounded-full p-3"
          onClick={onClose}
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row h-[80vh] md:h-auto">
          <div className="w-full md:w-[250px] flex-shrink-0">
            <div className="relative h-[300px] md:h-full">
              <img
                src={speaker.imageSrc}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="p-6 md:p-8 flex-1 overflow-y-auto">
            <div className="mb-2">
              <span className="px-2 py-1 bg-gold-dark/20 text-gold-light text-xs rounded-full">
                {speaker.featured ? 'Special Guest' : 'Speaker'}
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
                  <br />
                  <br />
                  Join us for an inspiring session with {speaker.name}, sharing a personal journey from military service to entrepreneurial success.
                </>
              )}
            </p>
            <GoldButton variant="outline" showArrow onClick={onClose}>
              Back
            </GoldButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;