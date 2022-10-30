import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/common/navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
