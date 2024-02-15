import curry from './assets/img/curry.jpg'

function Webapp(){
    return (
<div className='text-yellow-800'>
    <div>
      <nav>
        <div>
          <h1 className='font-boald uppercase  p-4'>
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
        <a href="#">Log in</a>
        <a href="#">Sign up</a>
      </div>

      <header >
        <h2 className ='text-grey-700 text-6xl font-semibold'>Recipes</h2>
        <h3 className='text-2xl font-semibold'>For Ninjas</h3>
      </header>

      <div>
        <h4 className='font-bold mt-12 pb-2'>Latest Recipes</h4>
  
        <div>
          {/* <!-- cards go here --> */}
          <div> 
            <img src={curry} alt="stew" />
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4 className='font-bold mt-12 pb-2'>Most Popular</h4>

        <div>
          {/* <!-- cards go here --> */}
        </div>
      </div>

      <div>
        <div>Load more</div>
      </div>    
 </main>
 </div>
    )
}

export default Webapp ;