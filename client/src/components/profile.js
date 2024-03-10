import React from 'react';
import "../style/profile.css";

const Profile = ({ user }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="user-profile profile-form">
        <div className="profile-top">
          <div className="profile-photo">
            {user.image ? (
              <img src={user.image} alt="Profile Photo" />
            ) : (
              <img src="https://cdn.discordapp.com/attachments/828116217285836825/1106489564949925948/orca_pfp.jpg" alt="Profile Photo" />
            )}
          </div>

          <div className="profile-top-names">
            <div className="profile-details">
              <h1 className="profile-name">{user.name}</h1>
              <h4 className="pronouns">({user.pronouns})</h4>
            </div>
            <h4 className="username">@{user.username}</h4>
          </div>
        </div>
        <br />

        <div className="profile-actions">
          <div className="action-button">
            <button className="btn blue-button" onClick={() => window.location.href='/viewProfile'}>View Details</button>
          </div>
          <div className="action-button">
            <button className="btn blue-button" onClick={() => window.location.href='/editProfile'}>Edit Details</button>
          </div>
        </div>

        <form className="form" action="/updateProfile" method="post" style={{ alignItems: 'start' }}>
          <label htmlFor="email">Email</label>
          <input className="form-control" id="disabledInput" type="text" placeholder={user.email} disabled />
          <br />

          <label htmlFor="birthday">Birthday</label>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder={user.birthday instanceof Date ? user.birthday.toISOString().substring(0, 10) : ''}
            disabled
          />
          <br />

          <label htmlFor="interests">Your Tags</label>
          <div id="interests" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>
            {user.interests.map((interest, index) => (
              <div className="form-check" key={index}>
                <input className="form-check-input" type="checkbox" value={interest} disabled />
                <label
                  className="form-check-label interest-button"
                  style={{ color: 'white', backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 100%, 20%)`, border: '1px solid black' }}
                >
                  {interest}
                </label>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
