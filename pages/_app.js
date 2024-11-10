import '../globals.css'
import { Fredoka } from 'next/font/google';
import { GameProvider } from './gameContext';


const fredoka = Fredoka({
  subsets: ['latin'], // You can specify subsets like 'latin', 'cyrillic', etc.
  weight: ['400', '700'], // Specify the weights you need (e.g., regular and bold)
  display: 'swap', // Optional: improves font loading behavior
});


function MyApp({ Component, pageProps }) {
  return (
    <main className={fredoka.className}>
      <GameProvider lang="en">
        <Component {...pageProps} />
      </GameProvider>
    </main>
  );
}

export default MyApp;