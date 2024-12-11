// api/sendMessage.js
let messages = [];  // Temporary in-memory storage

export default async (req, res) => {
    if (req.method === 'POST') {
        const { message } = req.body;

        // Add new message with "unsent" status
        const newMessage = { message, status: 'unsent', timestamp: Date.now() };
        messages.push(newMessage);

        // Simulate processing of message status updates
        setTimeout(() => {
            // Change message status to "sent"
            newMessage.status = 'sent';

            setTimeout(() => {
                // Change message status to "read"
                newMessage.status = 'read';
                res.status(200).json({ messages });
            }, 1500);  // Delay to simulate reading the message

        }, 1000);  // Delay to simulate sending the message

    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};
