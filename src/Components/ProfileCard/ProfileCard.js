import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ user }) => {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <img src={user.profilePicture || "https://placehold.co/250x250"} alt="Profile" className="profile-picture" />
                <h2>{user.name}</h2>
            </div>
            <div className="profile-details">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Address:</strong> {user.address}</p>
                <p><strong>Bio:</strong> {user.bio || "No bio available."}</p>
            </div>
            <div className="social-links">
                {user.socialMedia && (
                    <>
                        {user.socialMedia.facebook && (
                            <a href={user.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        )}
                        {user.socialMedia.twitter && (
                            <a href={user.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                                Twitter
                            </a>
                        )}
                        {user.socialMedia.linkedin && (
                            <a href={user.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;