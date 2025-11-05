import "../Styles/Contact.css";
import { contactDatas } from "../Constants/data";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="contactContainer">
      {/* contact content */}
      <div className="contactContent">
        <h1>Let’s Connect!</h1>
        <p>
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. If you’re looking for a
          passionate Java Full Stack Developer ready to grow and contribute —
          feel free to reach out!
        </p>
      </div>

      {/* social media links */}
      <div className="socialMedia">
        {contactDatas.map((contactData, index) => {
          const Icon = contactData.icon;
          return (
            <a
              key={index}
              href={contactData.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${contactData.name.toLowerCase()}`}
            >
              <Icon size={48} />
            </a>
          );
        })}
      </div>

      {/* google map */}
      <div className="googleMap">
        <iframe
          title="Valliyammai Street, Vadapalani, Chennai"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.890662052154!2d80.2086691749502!3d13.052726014199503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52672e869cb0f5%3A0xa34542a3eb7c1b0b!2sValliyammai%20St%2C%20Vadapalani%2C%20Chennai%2C%20Tamil%20Nadu%20600026!5e0!3m2!1sen!2sin!4v1730811000000!5m2!1sen!2sin"
          width="70%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;
