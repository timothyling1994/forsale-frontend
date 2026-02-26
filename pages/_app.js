import '../globals.css'
import { Fredoka } from 'next/font/google';
import { GameProvider } from './gameContext';
import { SocketProvider } from './socketContext';
import Head from 'next/head';


const fredoka = Fredoka({
  subsets: ['latin'], // You can specify subsets like 'latin', 'cyrillic', etc.
  weight: ['400', '700'], // Specify the weights you need (e.g., regular and bold)
  display: 'swap', // Optional: improves font loading behavior
});


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </Head>
      <main className={fredoka.className}>
        <SocketProvider>
        <GameProvider lang="en">
          <Component {...pageProps} />
          </GameProvider>
        </SocketProvider>
      </main>
    </>
  );
}

export default MyApp;