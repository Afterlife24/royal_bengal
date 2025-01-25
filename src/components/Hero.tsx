import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundPosition: `center ${offset * 0.5}px`,
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in">
          Welcome to Saveur
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 opacity-0 animate-slide-up">
          Experience the Taste of Excellence
        </p>
        <button 
  onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}
  className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold
    hover:bg-amber-700 transform hover:scale-105 transition-all duration-300
    opacity-0 animate-fade-in-delay mr-5"
>
  Reserve a Table
</button>

<button 
  onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}
  className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold
    hover:bg-amber-700 transform hover:scale-105 transition-all duration-300
    opacity-0 animate-fade-in-delay"
>
  Place a Order
</button> 

      </div>
    </section>
  );
};

export default Hero;