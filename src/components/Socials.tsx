import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export const Socials = () => (
  <div className="flex justify-center py-5">
    <a
      className="icono"
      href="mailto: fiorinosanti@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      <FaEnvelope />
    </a>
    <a
      className="icono"
      href="https://www.instagram.com/santifiorino"
      target="_blank"
      rel="noreferrer"
    >
      <FaInstagram />
    </a>
    <a
      className="icono"
      href="https://www.linkedin.com/in/sfiorino/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>
    <a
      className="icono"
      href="https://www.youtube.com/channel/UCXOr5r5fLdvLlXxc14tXt9g"
      target="_blank"
      rel="noreferrer"
    >
      <FaYoutube />
    </a>
    <a
      className="icono"
      href="https://www.tiktok.com/@santifiorino"
      target="_blank"
      rel="noreferrer"
    >
      <FaTiktok />
    </a>
  </div>
);
