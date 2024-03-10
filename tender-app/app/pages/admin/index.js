import Layout from '../../layouts/layout';
import { useState, useEffect } from 'react';
import { getTenders, addTender, updateTender, deleteTender } from '../utils/api';
import TenderList from '../components/TenderList';
import TenderForm from '../components/TenderForm';

export default function AdminDashboard() {
    const [tenders, setTenders] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedTender, setSelectedTender] = useState(null);

    useEffect(() => {
        const fetchTenders = async () => {
            const fetchedTenders = await getTenders();
            setTenders(fetchedTenders);
        };

        fetchTenders();
    }, []);

    const handleAddTender = async (tenderData) => {
        const response = await addTender(tenderData);
        if (response.ok) {
            setTenders([...tenders, response.data]);
            setShowForm(false);
        }
    };

    const handleEditTender = async (tenderData) => {
        const response = await updateTender(tenderData);
        if (response.ok) {
            setTenders(tenders.map((tender) => (tender._id === tenderData._id ? response.data : tender)));
            setShowForm(false);
        }
    };

    const handleDeleteTender = async (tenderId) => {
        const response = await deleteTender(tenderId);
        if (response.ok) {
            setTenders(tenders.filter((tender) => tender._id !== tenderId));
        }
    };

    const handleOpenForm = (isEdit = false, tender) => {
        setSelectedTender(isEdit ? tender : null);
        setShowForm(true);
    };

    return (
        <Layout>
            <h1>Admin Dashboard</h1>
            <button onClick={() => handleOpenForm()}>Add Tender</button>
            {showForm && (
                <TenderForm
                    tender={selectedTender}
                    onSubmit={selectedTender ? handleEditTender : handleAddTender}
                    onClose={() => setShowForm(false)}
                />
            )}
            <TenderList tenders={tenders} onDelete={handleDeleteTender} onEdit={handleOpenForm} />
        </Layout>
    );
}