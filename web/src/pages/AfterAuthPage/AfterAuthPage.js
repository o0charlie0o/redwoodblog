import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const AfterAuthPage = () => {
  const { signUp, isAuthenticated } = useAuth()

  console.log(isAuthenticated)

  const searchParams = new URLSearchParams(window.location.search)
  console.log(searchParams.get('redirectTo'))
  return (
    <>
      <h1>AfterAuthPage</h1>
      <p>
        Find me in <code>./web/src/pages/AfterAuthPage/AfterAuthPage.js</code>
      </p>
      <p>
        My default route is named <code>afterAuth</code>, link to me with `
        <Link to={routes.afterAuth()}>AfterAuth</Link>`
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

export default AfterAuthPage
