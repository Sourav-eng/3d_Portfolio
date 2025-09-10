import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
import { Particles } from '../components/Particle';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [showAlert, setshowAlert] = useState(false)
  const [alertType, setalertType] = useState("success")
  const [alertMessge, setalertMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const showAlertMessage = (type, message) => {
    setalertType(type)
    setalertMessage(message)
    setshowAlert(true)
    setTimeout(()=>{
      setshowAlert(false);
    }, 5000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_22cpzbq',
        'template_p0g8i6u',
        {
          form_name: form.name,
          to_name: 'Sourav',
          from_email: form.email,
          to_email: 'souravnishad429@gmail.com',
          message: form.message,
        },
        'MEARLFLekmq5paXUO'
      );
      setLoading(false);
      showAlertMessage("success", "Your Message has been sent")

      setForm({ name: '', email: '', message: '' });

    } catch (error) {
      setLoading(false);
      console.error('Email sending error:', error);
      showAlertMessage("Oops", "Somthing went wrong!!")
      
    }
  };

  return (
    <section id='contact' className="relative flex items-center justify-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessge} />}
      <div className="flex flex-col items-center max-w-md p-5 mx-auto border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website or improve the performance of an existing platform, feel free to contact me. I am here to help!
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          <div>
            <label className="field-label" htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Sourav Nishad"
              className="field-input field-input-focus"
              autoComplete="name"
              required
            />
          </div>

          <div>
            <label className="field-label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="souravnishad429@gmail.com"
              className="field-input field-input-focus"
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label className="field-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Hi, I want to get in touch..."
              className="field-input field-input-focus"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover:animation flex items-center justify-center gap-2"
          >
            {loading ? 'Sending...' : 'Submit'}
            <img className="field-btn_arrow" src="/assets/arrow-up.png" alt="arrow-up" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
