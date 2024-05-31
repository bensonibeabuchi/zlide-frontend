import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl mb-4 font-bold text-[#1f1073]">Message sent</h2>
        <p>Thank you for your message, we will get back to you immediately</p>
        <div className="mt-8 flex justify-around">
          <button onClick={onClose} className="bg-amber-300 px-8 py-3 rounded-lg my-4 hover:bg-amber-200 hover:scale-105 hover:shadow-lg">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
