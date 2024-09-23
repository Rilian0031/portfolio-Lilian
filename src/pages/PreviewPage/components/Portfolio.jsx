import React from 'react';
import techBg from '../../../assets/img-port/shopit.png';
import techBg1 from '../../../assets/img-port/isew.png';
import techBg2 from '../../../assets/img-port/event.png';
import techBg3 from '../../../assets/img-port/port.png';
import techBg4 from '../../../assets/img-port/project.png';
import techBg5 from '../../../assets/img-port/momo.png';



// import other images as needed

const Portfolio = () => {
  const projects = [
    {
      title: 'Shop IT',
      description: 'Landing page for fresh vegetable hub website using CSS & HTML',
      imageUrl: techBg,
    },
    {
      title: 'Fashion ',
      description: 'Fashion Website using CSS, HTML ',
      imageUrl: techBg1, 
    },
    
    {
      title: 'Event Management App',
      description: 'Web App for creating displaying and managing events',
      imageUrl: techBg2, 
    },
    {
      title: 'Portfolio App',
      description: 'Showcase your talent on ZCA portfolio app',
      imageUrl: techBg3,
      
    },
    {
      title: 'Edugenius',
      description: 'Educational web app designed to revolutionize learning experience with a range of Al-powered tool',
      imageUrl: techBg4, 
    },
    {
      title: 'Mobile-Wallet Fraud Database',
      description: 'Mobile wallet fraud database open source project (DPG)',
      imageUrl: techBg5, 
    },
    
    // Add more projects as needed
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="  rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 group">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"/>
              <div className="p-6 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
