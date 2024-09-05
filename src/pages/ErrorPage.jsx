import { Link } from 'react-router-dom';
import errorImg from '../assets/everett-bartels-FJMK4VKW-Xw-unsplash.jpg';

export default function ErrorPage() {
  return (
    <div className='relative flex flex-col min-h-[100vh] font-bold'>
      <img src={errorImg} alt="Error image of a dead-end road" className="absolute top-0 right-0 h-full w-full object-cover z-0" />
      <div className="absolute h-full w-[100vw] bg-gradient-to-t from-[rgba(8,33,45,1)] from-0% via-[rgba(8,33,45,0.4)] via-30% to-[rgba(8,33,45,0)] to-100% z-10" />
      <div className="relative flex flex-col items-center text-center w-full text-n-very-dark-blue mt-[12vh] px-16 z-20">
        <h1 className="text-4xl my-8">Oops...</h1>
        <h4 className="text-xl leading-tight py-2">Doesn't look like this path leads anywhere.</h4>
        <h4 className="text-xl leading-tight py-2">Let's turn around and head <Link to='/' className="text-p-glacier-blue underline">home</Link>.</h4>
      </div>
      <div className='absolute font-normal text-xs text-n-light-grey text-center w-full bottom-0 py-16 px-8 z-20 lg:text-end'>
        <p>Image source: Everett Bartels, Unsplash</p>
      </div>
    </div>
  )
}