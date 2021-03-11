import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { signUp, isAuthenticated } = useAuth()

  console.log(isAuthenticated)

  return (
    <>
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
        <button
          onClick={() =>
            signUp({
              appState: { targetUrl: '/after-auth' },
            })
          }
        >
          Sign In
        </button>
      </p>
    </>
  )
}

export default HomePage
