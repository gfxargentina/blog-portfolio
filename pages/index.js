import Head from 'next/head'
import Link from 'next/link'
import { getPostsAndPortfolio } from './lib/data'




export const getStaticProps = async () => {

  const data = await getPostsAndPortfolio();

return {
  props: {
    data
  }
}
}


export default function Home({ data }) {
  
  //console.log(data)


  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>My portfolio</h1> 

      <div>
          {
            data?.portfolios?.map((item) => (
              <div key={item.slug}>
                  <Link href={`/portfolio/${item.slug}`}><a>{ item.title }</a></Link>
              </div>
            ))
          }
        </div> 

        <div className="mt-10">
            {
              data?.posts?.map((post) => (
                <div key={post.slug} >
                    <Link href={`/blog/${post.slug}`}><a>{ post.title }</a></Link>

                </div>
              ))
            }
        </div>
      
    </>
  )
}
