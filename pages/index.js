import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alessio Muggani</title>
      </Head>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const projects = await res.json();

//   return {
//     props: {
//       projects,
//     },
//   };
// };
