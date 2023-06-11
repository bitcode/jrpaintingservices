import React from 'react';

const HomePage: React.FC = () => {
  return (
    //<div className="max-w-1800 mx-auto">
      <div className='space-y-8 grid grid-cols-1 mx-8'>
        <div className="card bg-base-200 space shadow-xli bg-gradient-to-r from-indigo-500 to-blue-500">
          <div className="hero dark flex flex-col items-center justify-center py-40">
            <h1 className="hero-content text-4xl font-bold">Transform Your Living Space or Workplace Into a Masterpiece - Discover the Magic of Our Expert Painting Services!</h1> 
            <p className="hero-content text-2xl">Skyrocket Your Property Market Value - Experience the Power of Transformation with Our Superior Painting Services!</p>
          </div>
        </div>
        <div className="hero card bg-base-200 shadow-xl bg-gradient-to-r from-blue-600 to-violet-600">
          <div className="hero-content py-40 flex flex-col items-center">
            <p className='text-3xl font-semibold'>Brighten Your World With Prestige Painters</p> 
            <p className='text-xl'>Ever walked into a room and felt it needed a refresh? Walls fade, colors dull, and what was once a vibrant space starts to lose its charm. It's a common problem faced by many homeowners and businesses - but it doesn't have to be your problem. At Prestige Painters, we understand the transformative power of color. A fresh coat of paint can breathe life into your living or working environment, making it feel inviting once again.</p>
          </div>
        </div>
        <div className="hero card bg-base-200 shadow-xl bg-gradient-to-r from-indigo-500 to-blue-500">
          <div className="hero-content py-40 flex flex-col items-center">
            <p className='text-3xl font-semibold'>Transform Dull Walls into Vibrant Spaces</p> 
            <p className='text-xl'>Over time, your walls have endured a lot. The wear and tear of everyday life, the occasional coffee spill, and the constant exposure to sunlight leave them looking less than their best. And if you're a business owner, maintaining a professional and inviting atmosphere for your clients is crucial. But the thought of undertaking a painting project can seem daunting. The preparation, the mess, the time - it's enough to make anyone hesitate.</p>
          </div>
        </div>
        <div className="hero card bg-base-200 shadow-xl bg-gradient-to-r from-blue-600 to-violet-600">
          <div className="hero-content py-40 flex flex-col items-center">
            <p className='text-3xl font-semibold'>Prestige Painters: Your Partner in Transformation</p> 
            <p className='text-xl'>That's where we come in. Prestige Painters specializes in indoor painting for both residential and commercial spaces. Our expert team takes care of every step, from prepping your space to adding the final touch-ups, causing minimal disruption to your daily routine or business operations. But why consider painting your property? Here are ten compelling reasons...</p>
          </div>
        </div>
      </div> 
     // </div>
  );
};

export default HomePage;