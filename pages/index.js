import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../lib/data'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          My Blog!
        </h1>
      </main>

      <div>
        {blogPosts.map(post => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div >
              <h2>{post.title}</h2>
              <span>{post.date.toString()}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
