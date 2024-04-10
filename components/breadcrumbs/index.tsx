import { Link } from '../link/Link'

export function Breadcrumbs() {
  return (
    <div className="flex gap-2 items-center">
      <Link href="/">home</Link>
      &#62;
      <Link href="/">article</Link>
      &#62;
      <Link href="/article/astrofisica-multimensageira">
        astrofisica-multimensageira
      </Link>
    </div>
  )
}
