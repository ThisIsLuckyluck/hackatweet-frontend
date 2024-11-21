import Login from '../components/Login';
import Head from "next/head";

function Index() {
  return (
   <>
    <Head>
    <title>Hackatweet: Home page to login</title>
    </Head>
    
  
    <Login />
   </>
  );
}

export default Index;
