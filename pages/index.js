import Head from "next/head";

export default function Home({ projects }) {
  console.log(projects);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Alessio Muggani</title>
        <meta name="keywords" content="Alession Muggani portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/e20sdfsd9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};
