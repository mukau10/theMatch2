import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../sass/utils.scss";

export default function RegisterProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState({});
  const [imageBase64, setImageBase64] = useState("");

  function convertBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
        console.log();
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  const uploadToCloud = async (e) => {
    e.preventDefault();
    const myData = await convertBase64(uploadedImage);
    console.log(myData);
    setImageBase64(myData);

    let apiUrl = "https://api.cloudinary.com/v1_1/TheMatch/image/upload";
    let data = {
      file: myData,
      upload_preset: "theMatch",
    };
    fetch(apiUrl, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(async (r) => {
        let data = await r.json();
        setProfileImage(data.secure_url);
      })
      .catch((err) => console.log(err));
  };
  function sendDataToDB() {
    axios
      .post("http://localhost:3080/register/profile", {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        gender: gender,
        profileImage: profileImage,
      })
      .then((response, error) => {
        if (error) {
          console.log(error);
        } else console.log(response);
      });
  }

  return (
    <div className="createProfile">
      <form onSubmit={sendDataToDB}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
        />
        <div className="uploadImage">
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg, image/jpg, image/webp"
            onChange={(e) => setUploadedImage(e.target.files[0])}
          />
          <div className="uploadImage__buttons">
            <button onClick={uploadToCloud}>Confirm</button>
            <button>Edit</button>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
