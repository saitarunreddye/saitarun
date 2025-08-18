import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl: string;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose, calendlyUrl }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleCalendlyClick = () => {
    // Track Calendly click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'calendly_click', {
        event_category: 'engagement',
        event_label: 'hire_me_button'
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="calendly-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            ref={modalRef}
            className="calendly-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="calendly-modal-header">
              <h2>Schedule a Meeting</h2>
              <button className="close-button" onClick={onClose}>
                <X size={24} />
              </button>
            </div>
            
            <div className="calendly-modal-content">
              <p>Let's discuss your project and how I can help bring your vision to life!</p>
              
              <div className="calendly-options">
                <div className="calendly-option">
                  <h3>🚀 Project Consultation</h3>
                  <p>Discuss your project requirements, timeline, and budget</p>
                  <a 
                    href={`${calendlyUrl}?name=Project%20Consultation`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-link"
                    onClick={handleCalendlyClick}
                  >
                    Schedule Consultation
                  </a>
                </div>
                
                <div className="calendly-option">
                  <h3>💼 Portfolio Review</h3>
                  <p>Get feedback on your portfolio and career guidance</p>
                  <a 
                    href={`${calendlyUrl}?name=Portfolio%20Review`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-link"
                    onClick={handleCalendlyClick}
                  >
                    Schedule Review
                  </a>
                </div>
                
                <div className="calendly-option">
                  <h3>☕ Coffee Chat</h3>
                  <p>General networking and industry discussion</p>
                  <a 
                    href={`${calendlyUrl}?name=Coffee%20Chat`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calendly-link"
                    onClick={handleCalendlyClick}
                  >
                    Schedule Chat
                  </a>
                </div>
              </div>
              
              <div className="calendly-footer">
                <p>Can't find a suitable time? <a href="mailto:your.email@example.com">Email me directly</a></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CalendlyModal;
