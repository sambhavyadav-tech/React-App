import Layout from '../../layouts/layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { applyForTender } from '../utils/api';
import ApplicationForm from '../../components/ApplicationForm';

export default function ApplyForTender() {
    const router = useRouter();
    const { tenderId } = router.query;
    const [applicationData, setApplicationData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (formData) => {
        setIsSubmitting(true);
        const response = await applyForTender(tenderId, formData);
        if (response.ok) {
            // Handle successful application (e.g., show confirmation message)
            router.push('/user/dashboard'); // Redirect to user dashboard
        } else {
            // Handle application error (e.g., display error message)
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            <h1>Apply for Tender</h1>
            <ApplicationForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </Layout>
    );
}