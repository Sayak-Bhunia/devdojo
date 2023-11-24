// main.jsx

import React from 'react';
import 'boxicons';
import ReactDOM from 'react-dom';
import gojo from "./images/gojo.png";
import hero from "./images/hero.png";
import goku from "./images/goku.png";
import sukuna from "./images/sukuna.png";
import luffy from "./images/luffy.png";
import './Member.css';

const profiles = [
  { id: 1, name: 'Sayak Bhunia', image: gojo, details: 'Frontend Developer',github:'https://github.com/Sayak-Bhunia', twitter:'https://twitter.com/0xSayak15089', linkedin:'https://www.linkedin.com/in/sayak-bhunia-452419252/' },
  { id: 2, name: 'Saket Srivastava', image: hero, details: 'Backend Developer',github:'https://www.github.com/SAKET687', twitter:'https://x.com/sriva60495', linkedin:'https://www.linkedin.com/in/saket-srivastava-8776a025a' },
  { id: 3, name: 'Subhraneel Saha', image: goku, details: 'Fullstack Developer',github:'https://github.com/TerminatorSS24', twitter:'https://twitter.com/Subhraneel40939', linkedin:'https://www.linkedin.com/in/subhraneel-saha-9499ab253/'},
  { id: 4, name: 'Snehangshu Mahapatra', image: sukuna, details: 'Content/Design',github:'https://github.com/Snehangshu-mahapatra', twitter:'https://mobile.twitter.com/FreePla01316841', linkedin:'https://www.linkedin.com/in/snehangshu-mahapatra-228086267/'},
  { id: 5, name: 'Rajarshi Nath', image: luffy, details: 'Competitive Programmer',github:'https://github.com/Max-31', twitter:'https://twitter.com/JeetRajnath', linkedin:'https://www.linkedin.com/in/rajarshi-nath-781456255/'},
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