import React from 'react';
import Image from 'next/image';

const ContactUs: React.FC = () => {
// Handles the submit event when the form is submitted
    const handleSubmit = async (event) => {
        // Prevent the form from submitting and refreshing the page
        event.preventDefault()
     
        // Get data from the form
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            message: event.target.message.value,
        }
     
        // Convert the data to JSON
        const JSONdata = JSON.stringify(data)
     
        // The API endpoint where we'll send the form data
        const endpoint = '/api/contact'
     
        // Form the request for sending data to the server
        const options = {
            method: 'POST', // We are sending data, so the method is 'POST'
            headers: {
                'Content-Type': 'application/json', // We are sending JSON
            },
            body: JSONdata, // The body of the request is the JSON string of form data
        }
     
        // Send the form data to our API endpoint and get a response
        const response = await fetch(endpoint, options)
     
        // Get the response data from the server as JSON
        const result = await response.json()
        alert(`Thank you, ${result.data.name}, we will contact you soon.`)
    }

  return (
    <div className="max-w-1800 mx-auto">
      <div className="card bg-base-200 space shadow-xl flex flex-row py-40 mx-8" style={{backgroundColor: 'rgb(32, 38, 50)'}}>
        <div className="hero-content w-1/2">
          <Image
            className="rounded-xl"
            src="/images/jrps_contractor.png" // Replace with your image
            alt="Placeholder"
            width={500}
            height={500}
          />
        </div>
        <div className="hero-content flex flex-col items-start py-40 w-1/2">
          <h1 className="hero-content text-4xl font-bold text-center">Contact Us</h1> 
          <p className="hero-content text-2xl text-center">Please fill the form below and we will get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8 space-y-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            
            <label htmlFor="phone" className="block text-sm font-medium text-gray-200">Phone</label>
            <input type="tel" id="phone" name="phone" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />

            <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
            <textarea id="message" name="message" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
        
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
