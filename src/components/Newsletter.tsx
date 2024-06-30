import React, {useState} from 'react';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email}),
        });

        if (response.ok) {
            setMessage('Subscription successful!');
            setEmail('');
        } else {
            setMessage('Subscription failed. Please try again.');
        }
    };

    return (
        <div className="newsletter p-4 border rounded-md shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    className="p-2 mb-2 border rounded-md"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className="p-2 bg-blue-500 text-white rounded-md" type="submit">Subscribe</button>
            </form>
            {message && <p className="mt-2 text-green-500">{message}</p>}
        </div>
    );
};

export default Newsletter;
