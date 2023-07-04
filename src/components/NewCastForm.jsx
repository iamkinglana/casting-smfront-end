import React from 'react';
import { useState } from 'react';

const NewsCastForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
        const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Title:', title);
        console.log('Content:', content);
        setTitle('');
        setContent('');
        };
    
        return (
        <div>
            <h2>Submit News</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewsCastForm;