'use client';
import React from 'react';
import ReactModal from 'react-modal';

// Create ModalContent component
const ModalContent = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <p className="text-lg font-semibold">
        Your order has been received and will soon be on its way to you!
      </p>
    </div>
  );
};
export default ModalContent;
