import { Link } from '../link/Link'

export function Footer() {
  return (
    <footer className="w-full flex items-center">
      <div className="container p-4 mx-auto flex items-center">
        <span>
          &copy; All rights reserved,{' '}
          <Link className="underline" href="https://github.com/ikidoncc">
            ikidoncc
          </Link>
          .
        </span>
      </div>
    </footer>
  )
}
