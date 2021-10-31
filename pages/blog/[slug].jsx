import React from 'react';
import { blogPosts } from '../../lib/data';

function BlogPage({ title, date, content }) {
  return (
    <div>
      <main>
        <h1>{title}</h1>
        <p>{content}</p>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  console.log('hi!', context);
  const { params } = context;
  return {
    props: blogPosts.find(post => post.slug === params.slug)
  }
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false
  };
}

export default BlogPage;
