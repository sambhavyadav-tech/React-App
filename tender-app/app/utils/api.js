export const getTenders = async () => {
    const response = await fetch('/api/tenders');
    return response.json();
};

export const getTenderById = async (tenderId) => {
    const response = await fetch(`/api/tenders/${tenderId}`);
    return response.json();
};

export const addTender = async (tenderData) => {
    const response = await fetch('/api/tenders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tenderData),
    });
    return response;
};

export const updateTender = async (tenderId, tenderData) => {
    const response = await fetch(`/api/tenders/${tenderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tenderData),
    });
    return response;
};

export const deleteTender = async (tenderId) => {
    const response = await fetch(`/api/tenders/${tenderId}`, {
        method: 'DELETE',
    });
    return response;
};

export const applyForTender = async (tenderId, applicationData) => {
    const response = await fetch(`/api/tenders/${tenderId}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicationData),
    });
    return response;
};

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            if (req.query.tenderId) {
                return getTenderById(req.query.tenderId, res);
            } else {
                return getTenders(req, res);
            }
        case 'POST':
            // Handle creating a new tender (implement validation and authorization)
            break;
        case 'PUT':
            // Handle updating an existing tender
            break;
        case 'DELETE':
            // Handle deleting a tender
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
