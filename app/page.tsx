import Head from 'next/head'; // For SEO
import Hero from "./components/Hero";
import StatsSection from "./components/Stats"; // Corrected import name
import Steps from "./components/Steps";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Refer Earn</title>
        <meta name="description" content="Join Refer Earn to grow your network and earn rewards!" />
      </Head>

      <main className="flex flex-col items-center bg-gray-50">
        {/* Hero Section */}
        <section className="w-full bg-white text-black"> {/* Changed to gray-100 */}
          <Hero />
        </section>

        {/* Stats Section */}
        <section className="w-full bg-gray-100 shadow-md">
          
            <StatsSection />
          
        </section>

        {/* Steps Section */}
        <section className="w-full bg-white"> {/* Changed to gray-100 */}
          
            <Steps />
          
        </section>

        {/* Quote Section */}
        <section className="w-full bg-gray-100 text-black"> {/* Changed to gray-100 */}
          
            <Quote />
        </section>
      </main>
    </>
  );
}