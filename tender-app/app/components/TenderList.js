import Link from 'next/link';

export default function TenderList({ tenders, onDelete, onEdit }) {
    return (
        <ul>
            {tenders.map((tender) => (
                <li key={tender._id}>
                    <Link href={`/user/tenders/${tender._id}`}>
                        <a>{tender.title}</a>
                    </Link>
                    {onDelete && ( // Show delete button for admins only
                        <button onClick={() => onDelete(tender._id)}>Delete</button>
                    )}
                    {onEdit && ( // Show edit button for admins only
                        <button onClick={() => onEdit(true, tender)}>Edit</button>
                    )}
                </li>
            ))}
        </ul>
    );
};