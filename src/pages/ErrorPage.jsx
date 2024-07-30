import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
      <main>
        <h1>Page not found</h1>
        <p>Could not find the page you are looking for.</p>
        <p>Please return <Link to='/' style={{color: 'pink'}}>home</Link>.</p>
      </main>
    </>
  )
}