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
              </a>
            </li>
            <li>
              <a href={social.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href={social.whatsapp} target="_blank" rel="noreferrer">
                <WhatsAppIcon />
              </a>
            </li>
            <li>
            <a href={"javascript.void(0)"} style={{opacity: 0.5, cursor: "not-allowed"}}>
                <FacebookIcon />
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
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
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
