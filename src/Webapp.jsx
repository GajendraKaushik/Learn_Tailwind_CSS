import curry from './assets/img/curry.jpg'

function Webapp(){
    return (
<div className='text-yellow-800'>
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
  
    <main className='px-16 py-6'>
      <div>
        <a href="#" className='text-primary'>Log in</a>
        <a href="#" className='text-primary' >Sign up</a>
      </div>

      <header >
        <h2 className ='text-grey-700 text-6xl font-semibold'>Recipes</h2>
        <h3 className='text-2xl font-semibold'>For Ninjas</h3>
      </header>

      <div>
        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
  
        <div className='mt-8' >
          {/* <!-- cards go here --> */}
          <div > 
            <img src={curry} alt="stew" />
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4 className='font-bold mt-12 pb-2'>Most Popular</h4>

        <div className='mt-8'>
          {/* <!-- cards go here --> */}
        </div>
      </div>

      <div>
        <div className='bg-secondary-100 text-secondary-200 '>Load more</div>
      </div>    
 </main>
 </div>
    )
}

export default Webapp ;