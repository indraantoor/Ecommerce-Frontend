import Navbar from '@/common/components/Navbar';
import {
  NavContentFooterLayout,
  MainContent,
} from '@/common/styles/Layouts/NavContentFooterLayout.style';
import ProductListings from '@/components/ProductsListings';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eflyer</title>
        <meta name="description" content="Developed by Indraan S Toor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavContentFooterLayout>
        <Navbar />
        <MainContent>
          <ProductListings />
        </MainContent>
        <div>Footer</div>
      </NavContentFooterLayout>
    </>
  );
}
