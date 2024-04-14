import React from 'react';

const UserGreeting = ({ title, surname }) => {
    return (
        <div>
            Hello {title} {surname}
        </div>
    );
};

export default UserGreeting;
