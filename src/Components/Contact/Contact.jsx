import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7cde9fa0-8727-47ea-a758-55683ad856e3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Itaque accusamus nesciunt incidunt temporibus, cupiditate 
                unde est voluptatum provident cum. Commodi dolorem est enim 
                explicabo excepturi officia quas cumque odio eligendi!</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@Edustie.com</li>
                    <li><img src={phone_icon} alt="" />+977-9898955522</li>
                    <li><img src={location_icon} alt="" />12-Bharatpur<br />Chitwan, Nepal</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label> Your name </label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label> Phone Number </label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required />
                <label> Write your message here </label>
                <textarea name='message'rows="6" placeholder='Enter your message' required />
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact