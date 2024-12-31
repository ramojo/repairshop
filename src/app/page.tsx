import Link from 'next/link';
export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-screen">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/60 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Allan&apos;s Computer <br /> Repair Shop</h1>
          <address>
            Bihi Plaza <br />
            CBD <br />
            Nairobi, Kenya
          </address>
          <p>
            Open Daily: 9am - 5pm
          </p>
          <Link href="tel:+254700000000" className="hover:underline">Call us</Link>
        </div>

      </main>

    </div>

  );
}
