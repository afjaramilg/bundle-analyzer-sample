import Link from 'next/link'
import faker from 'faker'
import { has } from 'lodash'; 

const Index = ({ name }) => {
  const ob1 = { nombre: "a" };
  has(ob1, "nombre"); 
  
  return (
    <div>
      <h1>Super heavy Homepage</h1>
      <p>Welcome, {name}</p>
      <div>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </div>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  // The name will be generated at build time only
  const name = faker.name.findName()

  return {
    props: { name },
  }
}
