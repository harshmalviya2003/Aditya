'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, X, Gift, Bell } from 'lucide-react';
import Link from 'next/link';

// 1. Define a specific type for the popup keys. This is the core fix.
type PopupKey = 'first' | 'second';

const TimedPopup = () => {
  // 2. Use the more specific 'PopupKey' type for the state.
  const [visiblePopup, setVisiblePopup] = useState<PopupKey | null>(null);

  useEffect(() => {
    const popupsState = sessionStorage.getItem('popupsShown');

    if (popupsState === 'completed') {
      return;
    }

    const firstPopupTimer = setTimeout(() => {
      if (sessionStorage.getItem('popupsShown') !== 'first_shown') {
        setVisiblePopup('first');
        sessionStorage.setItem('popupsShown', 'first_shown');
      }
    }, 60000); // 1 minute

    const secondPopupTimer = setTimeout(() => {
      setVisiblePopup('second');
      sessionStorage.setItem('popupsShown', 'completed');
    }, 120000); // 2 minutes

    return () => {
      clearTimeout(firstPopupTimer);
      clearTimeout(secondPopupTimer);
    };
  }, []);

  const handleClose = () => {
    setVisiblePopup(null);
  };

  if (!visiblePopup) {
    return null;
  }

  // The content structure remains the same.
  const popupContent = {
    first: {
      icon: <Bell className="w-9 h-9 text-teal-600" />,
      title: "Still Exploring?",
      description: "Our team is here to help you find the perfect care solution. Have any questions we can answer?",
      buttonText: "Ask a Question",
      buttonLink: "/contact"
    },
    second: {
      icon: <Gift className="w-9 h-9 text-green-600" />,
      title: "Get a Free Consultation",
      description: "Ready to take the next step? Schedule a free, no-obligation consultation with one of our care experts.",
      buttonText: "Schedule Now",
      buttonLink: "/contact"
    }
  };
  
  // 3. This access is now type-safe because TypeScript knows 'visiblePopup' must be 'first' or 'second'.
  const currentContent = popupContent[visiblePopup];

  // 4. Create a color mapping to avoid dynamic class name issues with Tailwind CSS.
  const colorSchemes = {
    first: {
      bg: 'bg-teal-100',
      buttonBg: 'bg-teal-600',
      buttonHoverBg: 'hover:bg-teal-700'
    },
    second: {
      bg: 'bg-green-100',
      buttonBg: 'bg-green-600',
      buttonHoverBg: 'hover:bg-green-700'
    }
  };
  const colors = colorSchemes[visiblePopup];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl p-8 sm:p-10 text-center max-w-md m-4 transform animate-scale-in"
        onClick={(e: React.MouseEvent) => e.stopPropagation()} // Added event type for safety
      >
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        {/* Use the color from the mapping object */}
        <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
          {currentContent.icon}
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {currentContent.title}
        </h2>
        
        <p className="text-gray-600 mb-8">
          {currentContent.description}
        </p>
        
        <Link
          href={currentContent.buttonLink}
          onClick={handleClose}
          // Use the colors from the mapping object, ensuring Tailwind detects them
          className={`inline-flex items-center justify-center w-full ${colors.buttonBg} text-white px-6 py-3.5 rounded-lg font-semibold ${colors.buttonHoverBg} transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
        >
          {currentContent.buttonText}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
            animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TimedPopup;
