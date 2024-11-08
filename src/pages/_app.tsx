
// /pages/_app.tsx
import { AppProps } from 'next/app';
import '@/styles/globals.css'
import { TaskProvider } from '@/Context/TaskContext';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TaskProvider>
      <Component {...pageProps} />
   </TaskProvider>
  );
}

export default MyApp;
