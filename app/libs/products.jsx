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
        <div className='section'>
          <h2>Products</h2>
          
          <div className='section-in'>
          </div>

          <a href='https://www.reacti.me/' target='blank'>
            <span 
              className='product' 
              // onClick={() => handleClick('reactime')} 
              // style={{ border: selectedProduct === 'reactime' ? '1px solid red' : 'none' }}
            >
              <span className='product-info'>
                <h4>Reactime</h4>
                <span className='product-description'>React Metrics Monitoring</span>
              </span>
              <Image src={reactime} alt='Reactime product image' width={500} height={500} />
            </span>
          </a>
          

          {/* <span className='product'>
            <span className='product-info'>
              <h4>Reactime</h4>
              <span className='product-description'>React Metrics Monitoring Application</span>
            </span>
            <Image src={reactime} alt='Reactime product image' width={500} height={500} />
          </span> */}

          <span 
            className='product' 
            // onClick={() => handleClick('cogntor')} 
            // style={{ border: selectedProduct === 'cogntor' ? '1px solid red' : 'none' }}
          >
            <span className='product-info'>
              <h4>Cogntor</h4>
              <span className='product-description'>Attention Metric Monitoring</span>
            </span>
            <Image src={cogntor} alt='Cogntor product image' width={500} height={500} />
          </span>
          
          <a href='https://github.com/Work-Brew-Inc/Work-Brew' target='blank'>
            <span 
              className='product' 
              // onClick={() => handleClick('workbrew')} 
              // style={{ border: selectedProduct === 'workbrew' ? '1px solid red' : 'none' }}
            >
              <span className='product-info'>
                <h4>Work Brew</h4>
                <span className='product-description'>Café Locator</span>
              </span>
              <Image src={workbrew} alt='Work Brew product image' width={500} height={500} />
            </span>
          </a>

          {/* <a href='https://github.com/Work-Brew-Inc/Work-Brew' target='blank'> */}
            <span 
              className='product' 
              // onClick={() => handleClick('workbrew')} 
              // style={{ border: selectedProduct === 'workbrew' ? '1px solid red' : 'none' }}
            >
              <span className='product-info'>
                <h4>Super Reader</h4>
                <span className='product-description'>Website Enhancer for ADHD/Dyslexia</span>
              </span>
              <Image src={superreader} alt='Super Reader product image' width={500} height={500} />
            </span>
          {/* </a> */}

        </div>
    </>
    );
  
}

export default Products;