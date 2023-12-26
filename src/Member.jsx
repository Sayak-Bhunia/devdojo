// main.jsx

import React from 'react';
import 'boxicons';
import ReactDOM from 'react-dom';
import sayak from "./images/sayak.png";
import saket from "./images/saket.png";
import subh2 from "./images/subh2.png";
import ethan from "./images/ethan.png";
import max from "./images/max.png";
import './Member.css';

const profiles = [
  { id: 1, name: 'Sayak Bhunia', image: sayak, details: 'Frontend Developer',github:'https://github.com/Sayak-Bhunia', twitter:'https://twitter.com/0xSayak15089', linkedin:'https://www.linkedin.com/in/sayak-bhunia-452419252/' },
  { id: 2, name: 'Saket Srivastava', image: saket, details: 'Backend Developer',github:'https://github.com/SAKET687', twitter:'https://twitter.com/Saket_Developer/', linkedin:'https://www.linkedin.com/in/saket-srivastava-8776a025a' },
  { id: 3, name: 'Subhraneel Saha', image: subh2, details: 'Fullstack Developer',github:'https://github.com/TerminatorSS24', twitter:'https://twitter.com/Subhraneel40939', linkedin:'https://www.linkedin.com/in/subhraneel-saha-9499ab253/'},
  { id: 4, name: 'Snehangshu Mahapatra', image: ethan, details: 'Content/Design',github:'https://github.com/Snehangshu-mahapatra', twitter:'https://twitter.com/Snehangshu77878', linkedin:'https://www.linkedin.com/in/snehangshu-mahapatra-228086267/'},
  { id: 5, name: 'Rajarshi Nath', image: max, details: 'Competitive Programmer',github:'https://github.com/Max-31', twitter:'https://twitter.com/JeetRajnath', linkedin:'https://www.linkedin.com/in/rajarshi-nath-781456255/'},
];

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src={profile.image} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.details}</p>
      <div className="social-icons">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-github bx-md' />
        </a>
        <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-twitter bx-md' />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-linkedin bx-md'/>
        </a>
      </div>
    </div>
  );
};


const Member = () => {
  return (
    <section className="bg6">
    <div className="container6">
      <div className="app">
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  </section>
  );
};


ReactDOM.render(<Member />, document.getElementById('root'));

export default Member;
