import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around bg-[#111518] rinf-1 ring-primary/30 text-background py-6 px-4 w-full sm:px-6 lg:px-8">
      <h3>© 2026 Venue Finder. All rights reserved.</h3>
      <h3>
        made with ❤️ by{" "}
        <a
          href="https://girishsinha.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Girish Sinha
        </a>
      </h3>
    </div>
  );
};

export default Footer;
