import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to pinned category as the initial screen
  redirect('/category/pinned');
}
