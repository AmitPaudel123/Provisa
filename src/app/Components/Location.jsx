import React from "react";

const Location = () => {
  return (
    <div>
      <div className=" w-full flex px-2 pb-2 z-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5082600902106!2d85.31976147530044!3d27.70158937618576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a8ec4da4db%3A0x37d7aeb77add9ce0!2sProfessional%20Visa%20and%20Education%20Services%20Pvt.%20ltd%20(PROVISA%20NEPAL)!5e0!3m2!1sen!2snp!4v1716394291501!5m2!1sen!2snp"
          width="600"
          height="450"
          allowFullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=" w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
