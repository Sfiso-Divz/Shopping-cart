import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='sticky top-0 left-0 z-10 flex justify-between items-center text-sm w-full py-4 px-8 border-b border-b-gray-200 bg-transparent backdrop-blur-3xl'>
      <h1 className=' text-gray-800'><Link to={'/'}>Shopity</Link></h1>
      <ul className='flex space-x-2'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/product-list'}>Products</Link></li>
      </ul>
      <button><Link to={'/cart'}><img src={'./assets/cart-shopping-fast-svgrepo-com.svg'} alt='Cart'/></Link></button>
    </div>
  )
}

export default Navbar