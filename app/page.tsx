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
        <section className="w-full bg-white text-black py-20"> {/* Changed to gray-100 */}
          <Hero />
        </section>

        {/* Stats Section */}
        <section className="w-full py-8 bg-gray-100 shadow-md">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-4">Our Impact</h2> {/* Reduced margin-bottom here */}
            <StatsSection />
          </div>
        </section>

        {/* Steps Section */}
        <section className="w-full py-16 bg-white"> {/* Changed to gray-100 */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
            <Steps />
          </div>
        </section>

        {/* Quote Section */}
        <section className="w-full bg-gray-100 text-black py-20"> {/* Changed to gray-100 */}
          <div className="container mx-auto px-4">
            <Quote />
          </div>
        </section>
      </main>
    </>
  );
}