import { Value } from "./Value";

export function Footer({ profile }) {
  const { social } = profile;

  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-top">
          <p className="footer-name">{profile.name}</p>
          <ul className="socials">
            <li>
              <a href={social.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href={social.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href={social.whatsapp} target="_blank" rel="noreferrer">
                <FacebookIcon />
                <span>Facebook</span>
              </a>
            </li>
            {/* <li>
              <a href={social.whatsapp} target="_blank" rel="noreferrer">
                <WhatsAppIcon />
                <span>Whatsapp</span>
              </a>
            </li> */}
            <li>
              <a href={"tel:+919550701968"} target="_blank" rel="noreferrer">
                <PhoneIcon />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 9H4V20h2.5V9ZM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4ZM20 20h-2.5v-5.6c0-1.8-.8-2.4-1.8-2.4s-2 .9-2 2.5V20H11V9h2.4v1.5c.5-.9 1.7-1.8 3.5-1.8 2.3 0 4.1 1.5 4.1 4.7V20Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        d="M8 4.8h8A3.2 3.2 0 0 1 19.2 8v8a3.2 3.2 0 0 1-3.2 3.2H8A3.2 3.2 0 0 1 4.8 16V8A3.2 3.2 0 0 1 8 4.8Z"
      />
      <circle
        cx="12"
        cy="12"
        r="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="16.4" cy="7.6" r="0.8" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.1 4.2A7.7 7.7 0 0 0 5.3 16.3L4.4 19.6l3.4-.9a7.7 7.7 0 0 0 3.7 1 7.7 7.7 0 0 0 .6-15.5Zm4.5 10.9c-.2.5-1.1.9-1.5 1-.4.1-.9.1-1.4-.1-.3-.1-.7-.2-1.2-.5-2.1-1.1-3.5-3.1-3.6-3.3-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.8.1.1 0 .3-.1.5l-.3.4c-.1.1-.2.3-.1.5.2.3.7 1.1 1.5 1.8.9.8 1.7 1 2 .1.1-.2.3-.2.5-.1l1.2.6c.2.1.4.2.4.3.1.2.1.8-.1 1.1Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 20v-6.2h2.1l.3-2.4h-2.4V9.8c0-.7.2-1.2 1.2-1.2h1.3V6.4c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.8H9.2v2.4h2.4V20h2.6Z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}
