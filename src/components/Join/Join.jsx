import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastStyle } from "../../assets/toastStyle";

const Join = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_y3wy389", "template_ctbix7o", form.current, {
        publicKey: "j4b-AW17ymYi07ZkW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Successfully received your info", toastStyle);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <div className="fields">
            <input
              type="email"
              name="user_email"
              placeholder="Enter Your E-mail address to join *"
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Enter Your contact number *"
              required
            />
          </div>

          <button className="btn btn-j" disabled={loading}>
            {loading ? <span className="loading-spinner"></span> : "Join Now"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Join;
