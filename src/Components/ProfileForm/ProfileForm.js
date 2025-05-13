import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileForm.css";

const API_URL = "https://whitneyxgunt-8181.theiadockernext-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/";

const ProfileForm = () => {
    const [userDetails, setUserDetails] = useState({});
    const [updatedDetails, setUpdatedDetails] = useState({});
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const authtoken = sessionStorage.getItem("auth-token");
      if (!authtoken) {
        navigate("/login");
      } else {
        fetchUserProfile();
      }
    }, [navigate]);
  
    const fetchUserProfile = async () => {
      try {
        const authtoken = sessionStorage.getItem("auth-token");
        const email = sessionStorage.getItem("email"); // Get the email from session storage
        if (!authtoken) {
          navigate("/login");
          return;
        }
  
        const response = await fetch(`${API_URL}/api/auth/user`, {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Email": email, // Add the email to the headers
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          const user = await response.json();
          setUserDetails(user);
          setUpdatedDetails(user);
        } else {
          throw new Error("Failed to fetch user profile");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleEdit = () => {
      setEditMode(true);
    };
  
    const handleInputChange = (e) => {
      setUpdatedDetails({
        ...updatedDetails,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const authtoken = sessionStorage.getItem("auth-token");
        const email = sessionStorage.getItem("email"); // Get the email from session storage
        if (!authtoken || !email) {
          navigate("/login");
          return;
        }
  
        const payload = { ...updatedDetails };
  
        const response = await fetch(`${API_URL}/api/auth/user`, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Email": email,
          },
          body: JSON.stringify(payload),
        });
  
        if (response.ok) {
          // Update the user details in session storage (if needed)
          setUserDetails(updatedDetails);
          setEditMode(false);
          // Display success message to the user
          alert(`Profile Updated Successfully!`);
          navigate("/profile"); // Navigate to profile to see the changes
        } else {
          throw new Error("Failed to update profile");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="profile-container">
        {editMode ? (
          <form onSubmit={handleSubmit} className="profile-form">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={userDetails.email}
                disabled // Disable the email field
              />
            </label>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={updatedDetails.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Phone
              <input
                type="text"
                name="phone"
                value={updatedDetails.phone}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Address
              <input
                type="text"
                name="address"
                value={updatedDetails.address || ''}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Bio
              <textarea
                name="bio"
                value={updatedDetails.bio || ''}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Profile Picture URL
              <input
                type="text"
                name="profilePicture"
                value={updatedDetails.profilePicture || ''}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Facebook URL
              <input
                type="text"
                name="facebook"
                value={updatedDetails.facebook || ''}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Twitter URL
              <input
                type="text"
                name="twitter"
                value={updatedDetails.twitter || ''}
                onChange={handleInputChange}
              />
            </label>
            <label>
              LinkedIn URL
              <input
                type="text"
                name="linkedin"
                value={updatedDetails.linkedin || ''}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        ) : (
          <div className="profile-details">
            <img src={userDetails.profilePicture || "https://placehold.co/150x150"} alt="Profile" className="profile-picture" />
            <h1>{userDetails.name}</h1>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Phone:</strong> {userDetails.phone}</p>
            <p><strong>Address:</strong> {userDetails.address}</p>
            <p><strong>Bio:</strong> {userDetails.bio}</p>
            <div className="social-links">
              {userDetails.facebook && (
                <a href={userDetails.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              )}
              {userDetails.twitter && (
                <a href={userDetails.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              )}
              {userDetails.linkedin && (
                <a href={userDetails.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
            </div>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  };

  export default ProfileForm;