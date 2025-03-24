
import React from 'react';
import RsvpForm from '@/components/RsvpForm';

const RsvpSection: React.FC = () => {
  return (
    <section id="rsvp" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 reveal">RSVP</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 reveal"></div>
          <p className="text-white/80 max-w-2xl mx-auto reveal">
            Secure your place at this exclusive gathering. Limited spots available.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto reveal">
          <RsvpForm />
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
