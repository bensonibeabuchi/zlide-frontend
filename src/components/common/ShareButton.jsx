import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
  FaRedditAlien,
} from 'react-icons/fa';

const ShareButton = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FaFacebookF />,
      label: 'Facebook',
    },
    {
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <FaTwitter />,
      label: 'Twitter',
    },
    {
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      icon: <FaLinkedinIn />,
      label: 'LinkedIn',
    },
    {
      href: `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`,
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
    },
    // {
    //   href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    //   icon: <FaTelegramPlane />,
    //   label: 'Telegram',
    // },
    // {
    //   href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    //   icon: <FaRedditAlien />,
    //   label: 'Reddit',
    // },
  ];

  return (
    <div className="flex space-x-4">
      {shareLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.label}`}
          className="p-2 text-white bg-[#1f1073] rounded-full hover:bg-[#FFD700] transition-all"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default ShareButton;
