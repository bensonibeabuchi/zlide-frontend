import React from 'react';

const SubscribeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-xl mb-4 font-bold text-[#1f1073]">Subscribed</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <div className="mt-2 flex justify-around">
          <button onClick={onClose} className="bg-amber-300 px-8 py-3 rounded-lg my-4 hover:bg-amber-200 hover:scale-105 hover:shadow-lg">
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
