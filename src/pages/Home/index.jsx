import { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

function Home(data) {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => setItems(data))
    
  }, []);

  return (
    <Layout>
      Home
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {
        items?.map((item) => (
          <Card key={data.id} data={item} />
        ))
      }
      </section>
    </Layout>
  )
}

export default Home;
