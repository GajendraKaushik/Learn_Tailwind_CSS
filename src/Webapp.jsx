import curry from './assets/img/curry.jpg'

function Webapp(){
    return (
<div className='text-yellow-800 font-body'>
    <div>
      <nav>
        <div>
          <h1 className='font-boald uppercase  p-4 border-b border-grey-100'>
            <a href="/">Food Ninja</a>
          </h1>
        </div>
        <ul>
          <li>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  
    <main className='px-16 py-6 bg-gray-100'>
      <div className='flex justify-center 
      md:justify-end gap-2'>
        <a href="#" className='text-primary'>Log in</a>
        <a href="#" className='text-primary ' >Sign up</a>
      </div>

      <header >
        <h2 className ='text-grey-700 text-6xl font-semibold'>Recipes</h2>
        <h3 className='text-2xl font-semibold'>For Ninjas</h3>
      </header>

      <div>
        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
  
        <div className='mt-8 ' >
          {/* <!-- cards go here --> */}
          <div className='bg-white rounded overflow-hidden shadow-md'> 
            <img src={curry} alt="stew" className='w-full h-32 sm:48 object-cover' />
            <div className='m-4'>
              <span className='font-bold'>5 Bean Chili Stew</span>
              <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4 className='font-bold mt-12 pb-2'>Most Popular</h4>

        <div className='mt-8'>
          {/* <!-- cards go here --> */}
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-secondary-100 text-secondary-200 '>Load more</div>
      </div>    
 </main>
 </div>
    )
}

export default Webapp ;