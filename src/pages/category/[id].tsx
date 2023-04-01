import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
export default function Category() {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch(`https://api.npoint.io/14f7ed4075e0432f308f/categories/${id}`)
      .then(response => response.json())
      .then(data => setCategory(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!category) {
    return  ;
  }

  return (
    <div className='content-c'>
<NextNProgress options={{ easing: 'ease', speed: 500 }} />
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
          <h1 className="title">{category.name}</h1>

          <div className="">
            {category.links.map((link) => (
              <div className ="column ">
                <div className="card">
                  <div className="card-content">
                    <a href={link.url}><p className="title">{link.title}</p></a><br></br><p>{link.url}</p>
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
