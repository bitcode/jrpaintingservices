import React from 'react';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-1800 mx-auto">
      <div className='space-y-8 grid grid-cols-1 mx-8'>
        <div className="card bg-base-200 space shadow-xli flex flex-row justify-center" style={{backgroundColor: 'rgb(32, 38, 50)'}}>
          <div className="hero dark flex flex-col items-center py-40 w-1/2">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 20px' }}>
              <h1 className="hero-content text-4xl font-bold text-center">Transform Your Living Space or Workplace Into a Masterpiece - Discover the Magic of Our Expert Painting Services!</h1> 
              <p className="hero-content text-2xl text-center">Skyrocket Your Property Market Value - Experience the Power of Transformation with Our Superior Painting Services!</p>
            </div>
          </div>
          <div className="hero-content w-1/2">
            <Image
              src="https://via.placeholder.com/500x500"
              alt="Placeholder"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="hero card bg-base-200 shadow-xl flex flex-row" style={{backgroundColor: 'rgb(32, 38, 50)'}}>
          <div className="hero-content w-1/2">
                <Image
              src="https://via.placeholder.com/500x500"
              alt="Placeholder"
              width={500}
              height={500}
            />
          </div>
          <div className="hero-content py-40 flex flex-col items-end w-1/2">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 20px' }}>
              <h1 className="hero-content text-4xl font-bold text-center">Brighten Your World With Prestige Painters</h1> 
              <p className='text-xl'>Ever walked into a room and felt it needed a refresh? Walls fade, colors dull, and what was once a vibrant space starts to lose its charm. It's a common problem faced by many homeowners and businesses - but it doesn't have to be your problem. At Prestige Painters, we understand the transformative power of color. A fresh coat of paint can breathe life into your living or working environment, making it feel inviting once again.</p>
            </div>
          </div>
        </div>
        <div className="hero card bg-base-200 shadow-xl flex flex-row" style={{backgroundColor: 'rgb(32, 38, 50)'}}>
          <div className="hero-content py-40 flex flex-col items-start w-1/2">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 20px' }}>
              <h1 className="hero-content text-4xl font-bold text-center">Transform Dull Walls into Vibrant Spaces</h1> 
              <p className='text-xl'>Over time, your walls have endured a lot. The wear and tear of everyday life, the occasional coffee spill, and the constant exposure to sunlight leave them looking less than their best. And if you're a business owner, maintaining a professional and inviting atmosphere for your clients is crucial. But the thought of undertaking a painting project can seem daunting. The preparation, the mess, the time - it's enough to make anyone hesitate.</p>
            </div>
          </div>
          <div className="hero-content w-1/2">
            <Image
              src="https://via.placeholder.com/500x500"
              alt="Placeholder"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="hero card bg-base-200 shadow-xl flex flex-row" style={{backgroundColor: 'rgb(32, 38, 50)'}}>
          <div className="hero-content w-1/2">
            <Image
              src="https://via.placeholder.com/500x500"
              alt="Placeholder"
              width={500}
              height={500}
            />
          </div>
          <div className="hero-content py-40 flex flex-col items-end w-1/2">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 20px' }}>
              <h1 className="hero-content text-4xl font-bold text-center">Prestige Painters: Your Partner in Transformation</h1> 
              <p className='text-xl'>Here are ten compelling reasons to consider painting your property...</p>
              <p className='text-xl'>That's where we come in. Prestige Painters specializes in indoor painting for both residential and commercial spaces. Our expert team takes care of every step, from prepping your space to adding the final touch-ups, causing minimal disruption to your daily routine or business operations.</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default HomePage;
