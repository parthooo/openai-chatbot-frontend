import { useState } from 'react';
import lens from "../assets/lens.png";
import loadingGif from "../assets/loadingGif.gif";

const QuestionForm = () => {
    const [question, setQuestion] = useState('');
    const [qaPairs, setQAPairs] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await fetch('http://localhost:4000/api/v1/question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question }),
            });

            const data = await response.json();
            const newQAPair = { question, answer: data.res.text };
            setQAPairs([...qaPairs, newQAPair]);
            setQuestion('');
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
          }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="spotlight__input"
                        disabled={loading}
                        style={{
                            backgroundImage: loading ? `url(${loadingGif})` : `url(${lens})`,
                          }}
                          placeholder="Ask me anything..."
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {qaPairs.map((qaPair, index) => (
                <div key={index}>
                    <div className="spotlight__answer" disabled={loading}>Question: {qaPair.question}</div>
                    <div className="spotlight__answer" disabled={loading}>Answer: {qaPair.answer}</div>
                </div>
            ))}
        </div>
    );
};

export default QuestionForm;
