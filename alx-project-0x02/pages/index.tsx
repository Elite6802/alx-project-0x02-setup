import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>ALX Next.js Starter</title>
        <meta name="description" content="Initial setup for the Next.js, TypeScript, Tailwind project." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
            Welcome to <span className="text-blue-600">Next.js!</span>
          </h1>

          <p className="mt-3 text-2xl text-gray-700">
            Setup Complete: TypeScript, ESLint, and Tailwind CSS are ready.
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 hover:border-blue-600 transition"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;