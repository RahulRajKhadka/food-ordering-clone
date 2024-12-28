// PaymentPage.js
import React from "react";

const PaymentPage = () => {
  const handlePaymentMethod = (method) => {
    alert(`Proceeding with ${method} payment method.`);
    // Here you can add logic to redirect the user to the specific payment gateway for the chosen method
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Choose Your Payment Method
      </h1>
      
      {/* Payment Method Option: eSewa */}
      <div className="mb-4">
        <button 
          onClick={() => handlePaymentMethod('eSewa')}
          className="w-full py-4 px-6 bg-blue-600 text-white rounded-lg flex items-center justify-between hover:bg-blue-700 transition-all">
          <span className="text-xl font-medium">eSewa</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Esewa_logo.webp" // eSewa logo URL
            alt="eSewa"
            className="w-12 h-12"
          />
        </button>
      </div>
      
      {/* Payment Method Option: Khalti */}
      <div className="mb-4">
        <button 
          onClick={() => handlePaymentMethod('Khalti')}
          className="w-full py-4 px-6 bg-green-600 text-white rounded-lg flex items-center justify-between hover:bg-green-700 transition-all">
          <span className="text-xl font-medium">Khalti</span>
          <img
            src="https://web.khalti.com/static/img/logo1.png" // Khalti logo URL
            alt="Khalti"
            className="w-12 h-12"
          />
        </button>
      </div>

      {/* Payment Method Option: Credit/Debit Card */}
      <div className="mb-4">
        <button 
          onClick={() => handlePaymentMethod('Credit/Debit Card')}
          className="w-full py-4 px-6 bg-gray-800 text-white rounded-lg flex items-center justify-between hover:bg-gray-900 transition-all">
          <span className="text-xl font-medium">Credit/Debit Card</span>
          <img
            src="https://th.bing.com/th/id/R.0a6ecfa5accd4daef621bafb4d7b1d20?rik=mayftvqCFwIlUw&pid=ImgRaw&r=0&sres=1&sresct=1" // Credit card logo URL
            alt="Card"
            className="w-12 h-12"
          />
        </button>
      </div>

      {/* Payment Method Option: UPI */}
      <div className="mb-4">
        <button 
          onClick={() => handlePaymentMethod('UPI')}
          className="w-full py-4 px-6 bg-indigo-600 text-white rounded-lg flex items-center justify-between hover:bg-indigo-700 transition-all">
          <span className="text-xl font-medium">UPI</span>
          <img
            src="https://th.bing.com/th/id/R.e8a952bee3fc739077a8e89791c77e7c?rik=cKVpZ4E79erqyw&pid=ImgRaw&r=0" // UPI logo URL
            alt="UPI"
            className="w-12 h-12"
          />
        </button>
      </div>

      {/* Payment Method Option: Net Banking */}
      <div className="mb-6">
        <button 
          onClick={() => handlePaymentMethod('Net Banking')}
          className="w-full py-4 px-6 bg-yellow-600 text-white rounded-lg flex items-center justify-between hover:bg-yellow-700 transition-all">
          <span className="text-xl font-medium">Net Banking</span>
          <img
            src="https://th.bing.com/th/id/OIP.ieVzsRBgX74Ih7nEcSlEswHaD4?rs=1&pid=ImgDetMain" // Net Banking logo URL
            alt="Net Banking"
            className="w-12 h-12"
          />
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
