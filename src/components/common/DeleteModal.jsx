import React from 'react';

const DeleteModal = ({ isOpen, onClose, onConfirm, }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-xl mb-4">Confirm Deletion</h2>
        <p>Are you sure you want to delete this Slide? </p>
        <div className="mt-8 flex justify-around">
          <button
            onClick={onClose}
            className="bg-gray-300 p-2 rounded-md w-24"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 p-2 rounded-md w-24 text-white"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
