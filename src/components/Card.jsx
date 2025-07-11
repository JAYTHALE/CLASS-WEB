import React from 'react';
import { ArrowRight } from 'lucide-react';

const Card = ({ title, description, image, action, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        )}

        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        {children}

        {action && (
          <div className="mt-4">
            <button
              onClick={action.onClick}
              className="inline-flex      items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              {action.text}
              <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;