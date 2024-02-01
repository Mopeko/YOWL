import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Post from './pages/post';
import Profil from './pages/profil';
import Search from './pages/search';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import CookiesPopup from "./components/CookiesPopup"; 

import {useState,useEffect } from 'react';

function App() {
  const [timedPopup, setTimedPopup]=useState(false);
  useEffect (() => {
    setTimeout (()=> {
    setTimedPopup(true);
    },3000)
  },[]);
  const closePopup= () => {
    setTimedPopup(false);
  };
  
    return (
    
      <div className="Popupontime">
      <CookiesPopup trigger={timedPopup} closePopup={closePopup}>
        <h3> Suits Privacy Policy </h3>
        <h3>Effective date: 01/22/2024</h3><br></br>
        <h5>Welcome to Suits! We are committed to protecting your privacy and securing the information you entrust to us. This privacy policy explains how we collect, use, share and protect your personal data when you use our application.<br></br><br></br>
   
  1. Information Collection<br></br><br></br>
  1.1 Information you provide to us<br></br><br></br>
  When using Suits, you may be asked to provide us with certain information, such as your username, e-mail address and other profile information. Your agreement to this is demonstrated by a positive act. We will verify the veracity of your information using two-step verification techniques and through your electronic devices.
   <br></br><br></br>
  1.2 Information collected automatically<br></br><br></br>
  We automatically collect information about how you use the App, including your tweet activity, the hashtags you use and other similar information. You have the choice to refuse this collection of information or to modify your choice at any time. This information is stored in a separate file for a period of time defined by applicable law. Your consent is expressed by a positive act.
  <br></br> <br></br>
  1.3 Legitimate purpose of data collection<br></br><br></br>
  All data collection has a predefined and legitimate purpose.
  <br></br><br></br>
  1.4 Cookie policy<br></br><br></br>
  Our cookie policy is predefined and accessible in the settings tab.
   <br></br><br></br>
  2. Use of information<br></br><br></br>
  We use the information we collect to personalize your experience on the application, improve our services and send you relevant notifications. We do not sell your personal information to third parties. If you would like more information, you can access a dedicated page in our application settings.
  <br></br><br></br>
  3. Information sharing<br></br><br></br>
  We share your personal information in a limited and secure way. This may include sharing with trusted partners to improve our services or to meet legal obligations. Their sharing is accessible to you in the dedicated tab in our app, and your choice is free to opt-in or opt-out.
  <br></br><br></br>
  4. Data security<br></br><br></br>
  We take reasonable security measures to protect your information from unauthorized access, alteration, disclosure or destruction. Your data will be stored for a defined period of time depending on the data in question, the specifications of which are accessible on the dedicated page in our application.
  <br></br><br></br>
  5. Privacy by Design<br></br><br></br>
  We follow the principles of "Privacy by Design", integrating privacy protection into the development of our application right from the outset. We minimize data collection, implement robust security measures, and are committed to respecting the privacy of our users.
  <br></br><br></br>
  6. Your choices<br></br> <br></br>
  You have control over your data. You can access, correct or delete your personal information at any time, and changes will take effect instantly. In addition, your choices about how your data is processed can be changed at any time.
  <br></br><br></br>
  7. Changes to the Policy<br></br>
  We may update this Privacy Policy at any time to reflect changes in our practices. The effective date at the top of this page indicates the last modification.
  <br></br><br></br>
  8. Contacting us<br></br> <br></br>
  If you have any questions about our privacy policy, please contact us at suits@gmail.com.</h5>
   </CookiesPopup>

  
    

      <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/search" element={<Search />} />

      </Routes>
      </div>
      
          // <Layout>
          //   <Row gutter={[0, 32]}>
          //     <Col span={24}>
          //       <Header>
          //         <AppHeader />
          //       </Header>
          //     </Col>
          //     <Col span={22} offset={1}>
          //       <Content>
          //         <AppRoutes />
          //       </Content>
          //     </Col>
          //   </Row>
          // </Layout>
        );
      };
      
export default App;