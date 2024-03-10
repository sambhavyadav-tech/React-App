import Layout from '../../layouts/layout';
import { useRouter } from 'next/router';
import { getTenderById, deleteTender } from '../../utils/api';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminTenderDetails() {
  const router = useRouter();
  const { tenderId } = router.query;
  const [tender, setTender] = useState(null);

  useEffect(() => {
    const fetchTender = async () => {
      const fetchedTender = await getTenderById(tenderId);
      setTender(fetchedTender);
    };

    if (tenderId) {
      fetchTender();
    }
  }, [tenderId]);

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this tender?');
    if (confirmed) {
      const response = await deleteTender(tenderId);
      if (response.ok) {
        router.push('/admin'); // Redirect to admin dashboard after deletion
      } else {
        // Handle deletion error (e.g., show error message)
      }
    }
  };

  if (!tender) return <Layout>Loading...</Layout>;

  return (
    <Layout>
      <h1>{tender.title}</h1>
      <p>{tender.description}</p>
      {/* Display other tender details as needed */}

      <Link href={`/admin/edit/${tenderId}`}>
        <button>Edit Tender</button>
      </Link>
      <button onClick={handleDelete}>Delete Tender</button>
    </Layout>
  );
}