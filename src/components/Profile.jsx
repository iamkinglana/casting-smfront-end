import React from 'react';

const Profile = () => {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'I am a software developer passionate about building web applications.',
    };
    
    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Bio: {user.bio}</p>
        </div>
    );
};

export default Profile;