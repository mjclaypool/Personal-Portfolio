import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
      <main className="error-section">
        <div className="error-content">
          <h1>Oops...</h1>
          <h4>Doesn't look like this path leads anywhere.</h4>
          <h4>Let's turn around and head <Link to='/' style={{color: '#187fb3'}}>home</Link>.</h4>
        </div>
        <div className='error-image-attribution'>
          <p>Image source: Everett Bartels, Unsplash</p>
        </div>
      </main>
    </>
  )
}