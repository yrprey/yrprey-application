import AOS from "aos";
import FormContact from "./Form";
import { useEffect } from "react";
import { StyledContactSection } from "./style";
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <StyledContactSection id="contact">
      <div className="container">
        <div className="container-left" data-aos="fade-right">
          <div className="content-up">
            <p className="title">Contact Us</p>
            <h5>
              Our Company <span>Contact Information</span>
            </h5>
            <p>
              Since 2022, YRPrey has provided places to test, train and improve
              your skills in the area of ​​security and vulnerability.
            </p>
          </div>
          <div className="content-down">
            <div className="contact">
              <button disabled id="mapMarker" title="MapMarker">
                <FaMapMarkerAlt />
              </button>
              <div>
                <p className="title">Our Location</p>
                <p className="details">
                  Palace of vulnerabilities, In the World, 123
                </p>
              </div>
            </div>
            <div className="contact">
              <button disabled id="phoneAlt" title="PhoneAlt">
                <FaPhoneAlt />
              </button>
              <div>
                <p className="title">Our Number</p>
                <p className="details">+1 702 123 456</p>
              </div>
            </div>
            <div className="contact">
              <button disabled id="mailBulk" title="MailBulk">
                <FaMailBulk />
              </button>
              <div>
                <p className="title">Our Mail</p>
                <p className="details">yrpreydigital@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-right" data-aos="fade-left">
          <FormContact />
        </div>
      </div>
    </StyledContactSection>
  );
}

export default ContactSection;
