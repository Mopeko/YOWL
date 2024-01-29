import React, { useState } from "react";
import axios from "axios";

const MyForm = ({ userId }) => {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('files', image);
      formData.append('data', JSON.stringify({ description, link, user: userId })); // Ajoutez l'ID de l'utilisateur
      const response = await axios.post("http://localhost:1337/api/posts", formData);
      console.log("POST request successful:", response.data);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',height: '50vh', padding: '20px', backgroundColor: '#000000' }}>
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" style={{ margin: '10px', padding: '10px', width: '80%', backgroundColor: '#282c34', color: 'white', border: '1px solid white', borderRadius: '5px' }} />
      <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link" style={{ margin: '10px', padding: '10px', width: '80%', backgroundColor: '#282c34', color: 'white', border: '1px solid white', borderRadius: '5px' }} />
      <input type="file" onChange={handleImageChange} style={{ margin: '10px', color: 'white', backgroundColor: '#282c34' }}/>
      <button type="button" onClick={onSubmit} style={{ margin: '10px', padding: '10px', width: '80%', backgroundColor: '#e3e3e3', color: 'black', border: 'none', borderRadius: '5px' }}>Submit</button>
    </form>
  );
};

export default MyForm;
