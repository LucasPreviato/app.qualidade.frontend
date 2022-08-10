import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Link href="/cadastro">
        <a className="m-3 p-3 rounded bg-teal-400">cadastro</a>
      </Link>
    </>
  )
}

export default Home
