import Layout from '../../layouts/layout';
import { useRouter } from 'next/router';
import { getTenderById } from '../utils/api';

export default function TenderDetails() {
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

    if (!tender) return <div>Loading...</div>;

    return (
        <Layout>
            <h1>{tender.title}</h1>
            <p>{tender.description}</p>
            {/* Display other tender details as needed */}

            {tender.allowApplications && (
                <button onClick={() => router.push(`/user/apply/${tenderId}`)}>Apply for Tender</button>
            )}
        </Layout>
    )
};