import '../styles/section.scss'
// import Image from 'next/image'
// import reactime from '../assets/products/reactime.gif'
// import cogntor from '../assets/products/Cogntor.png'
// import workbrew from '../assets/products/Workbrew.png'

function Products() {

  return (
    <>
      {/* <div className='section-wrapper'> */}
        <div className='section'>
          {/* <div className='title'> */}<h2>Products</h2>{/* </div> */}
          
          <div className='section-in'>

          </div>
          <span className='product'>
            <span className='product-info'>
              <h4>Reactime</h4>
              <span className='product-description'>React Metrics Monitoring Application</span>
            </span>
            {/* <Image src={reactime} alt='Reactime product image' width={500} height={500} /> */}
          </span>

          {/* <span className='product'>
            <span className='product-info'>
              <h4>Axoscan</h4>
              <span className='product-description'>Financial History Documentation Application</span>
            </span>
            <img src='#'></img>
          </span> */}

          <span className='product'>
            <span className='product-info'>
              <h4>Cogntor</h4>
              <span className='product-description'>Attention Metric Monitoring Application</span>
            </span>
            {/* <Image src={cogntor} alt='Cogntor product image' width={500} height={500} /> */}
          </span>
          
          
          <span className='product'>
            <span className='product-info'>
              <h4>Work Brew</h4>
              <span className='product-description'>Café Locator Application</span>
            </span>
            {/* <Image src={workbrew} alt='Work Brew product image' width={500} height={500} /> */}
          </span>
        </div>
      {/* </div> */}
    </>
  )
}

export default Products;