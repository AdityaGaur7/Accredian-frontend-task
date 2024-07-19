import React, { useState } from 'react';

const ReferralModal = ({ toggleModal }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
            let response = await fetch('http://localhost:5000/api/referrals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            response = await response.json();

            console.log(response);
            if (response) {
               
               alert("refer successfull")
               setModalOpen(false);
            } else {
              
                console.error('Failed to submit referral');
            }
        
    };
 

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Referral Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="referrerName">Your Name</label>
                <input 
                  type="text" 
                  id="referrerName" 
                  name="referrerName" 
                  value={formData.referrerName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="referrerEmail">Your Email</label>
                <input 
                  type="email" 
                  id="referrerEmail" 
                  name="referrerEmail" 
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="refereeName">Friend's Name</label>
                <input 
                  type="text" 
                  id="refereeName" 
                  name="refereeName" 
                  value={formData.refereeName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="refereeEmail">Friend's Email</label>
                <input 
                  type="email" 
                  id="refereeEmail" 
                  name="refereeEmail" 
                  value={formData.refereeEmail}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required 
                />
              </div>
              <div className="flex justify-end">
                <button 
                  type="button" 
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };


export default ReferralModal;
