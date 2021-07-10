import Link from "next/link";
import { useRouter } from "next/router";

const project = ({ project }) => {
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.body}</p>
      <br />
      <Link href="/">Go back</Link>
    </>
  );
};

export const getProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const projects = await res.json();
  const ids = projects.map((project) => project.id);
  const paths = ids.map((id) => ({ params: { id: id } }));

  return {
    paths,
    fallback: false,
  };
};

export default project;
