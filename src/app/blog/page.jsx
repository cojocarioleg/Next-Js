import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((el) => (
        <Link href={`blog/${el._id}`} className={styles.container} key={el._id}>
          <div>
            <Image
              src={el.img}
              alt={el.title}
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}> {el.title}</h1>
            <p className={styles.desc}>{el.desc}</p>
          </div>
        </Link>
      ))}


    </div>
  )
}

export default Blog