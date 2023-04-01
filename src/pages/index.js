import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
export default function Home() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('https://api.npoint.io/14f7ed4075e0432f308f/categories/')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = (categoryId) => {
    router.push(`/category/${categoryId}`);
  };

  return (
    <div className='content-c'>
           <NextNProgress />
       <Head>
        <title>WRE Collection By $#@$%^</title>
      </Head>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="../">
            <h1 >WRE</h1></a>
        </div>
      </nav>
      <div className="section">
        <div className="container">
          <h1 className="title">Level & Term</h1>
          <h2 className="subtitle">We have 4 level and 2 terms in each level</h2>
          <div className="">
            {categories.map((category) => (
              <div className="column" key={category.id}>
                <div className="card">
                  <div className="card-content">
                    <a onClick={() => handleClick(category.id)}>
                      <p className="title">{category.name}</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
