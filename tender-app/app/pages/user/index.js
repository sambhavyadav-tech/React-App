import Layout from '../../layouts/layout';
import { useState, useEffect } from 'react';
import { getTenders } from '../utils/api';
import TenderList from '../components/TenderList';

export default function UserDashboard() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    const fetchTenders = async () => {
      const fetchedTenders = await getTenders(); // Filter for available tenders for users
      setTenders(fetchedTenders);
    };

    fetchTenders();
  }, []);

  return (
    <Layout>
      <h1>User Dashboard</h1>
      <TenderList tenders={tenders} />
    </Layout>
  );
}