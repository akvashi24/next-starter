import Head from 'next/head'

const TWITTER_HANDLE = "akvashi24"
const TWITTER_LINK = "https://twitter.com/akvashi24"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Starter by akvashi24</title>
        <meta name="description" content="Hand-made by Adin Vashi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-zinc-900 h-screen overflow-scroll text-center">
        <div className="h-full bg-zinc-900 flex flex-col justify-between">
          <div className="pt-8 bg-zinc-900 text-center">
            <div className="mb-4">
              <span className={"bg-gradient-to-br text-center from-cyan-400 to-purple-500 bg-clip-text text-transparent text-6xl font-black mb-8"}>Next.js Starterpack</span>
            </div>
            <div className="w-1/2 mx-auto overflow-wrap">
              <p className="font-2xl text-zinc-100 mb-4">
                Comes with:
              </p>
              <ul className="text-white mb-4 font-semibold">
                <li>Next.js</li>
                <li>Tailwindcss</li>
              </ul>
              <span className="text-white">That's it for now!</span>
            </div>
          </div>
          <div className="flex justify-center items-center pt-4">
            <img alt="Twitter Logo" className="h-7 w-7" src="/icons/twitter-logo.svg" />
            <a
              className="text-zinc-100 font-semibold decoration-cyan-400"
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >{`built by @${TWITTER_HANDLE}`}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
