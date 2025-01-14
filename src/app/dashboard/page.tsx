import { redirect } from 'next/navigation';

export default function Dashboard() {
  // Just redirect to the dashboard overview page directly
  redirect('/dashboard/overview');
}
