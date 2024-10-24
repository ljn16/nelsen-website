// "use client";
import '../styles/section.scss'
import Image from 'next/image'
import reactime from '../assets/products/Reactime.gif'
import cogntor from '../assets/products/Cogntor.png'
import workbrew from '../assets/products/Workbrew.png'
import superreader from '../assets/products/SuperReader.gif'
// import { useState } from 'react';


function Products() {
  
    // const [selectedProduct, setSelectedProduct] = useState(null);

    // const handleClick = (product) => {
    //   setSelectedProduct(product);
    // };

  return (
    <>
      <div className='
    md:bg-white md:bg-opacity-5 p-4 md:m-14
      '>
        <h2 className='text-green-500'>Featured Products</h2>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
            <div className='flex flex-col items-center'>
              <Image className='w-72 h-44 md:w-40 md:h-24 md:hover:w-72 md:hover:h-44 rounded-lg' src={reactime} alt="Reactime" />
              <h3 className='text-lg font-semibold mt-2'>Reactime</h3>
              <p className='hidden md:block text-center'>React Metrics Monitoring</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image className='w-72 h-44 md:w-40 md:h-24 md:hover:w-72 md:hover:h-44 rounded-lg' src={cogntor} alt="Cogntor"/>
              <h3 className='text-lg font-semibold mt-2'>Cogntor</h3>
              <p className='hidden md:block text-center'>Attention Metric Monitoring</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image className='w-72 h-44 md:w-40 md:h-24 md:hover:w-72 md:hover:h-44 rounded-lg' src={workbrew} alt="Workbrew"/>
              <h3 className='text-lg font-semibold mt-2'>Workbrew</h3>
              <p className='hidden md:block text-center'>Café Locator</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image className='w-72 h-44 md:w-40 md:h-24 md:hover:w-72 md:hover:h-44 rounded-lg' src={superreader} alt="SuperReader"/>
              <h3 className='text-lg font-semibold mt-2'>SuperReader</h3>
              <p className='hidden md:block text-center'>Website Enhancer for ADHD and Dyslexia</p>
            </div>
          </div>
        </div>


      </div>
    </>
    );
  
}

export default Products;