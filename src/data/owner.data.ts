interface iSocialMedia {
  url: string;
  // a fontawesome icon
  icon: string;
}

interface OwnerData {
  name: string;
  lastName: string;
  occupation: string;

  contact: {
    phone: string;
    email: string;
    social: {
      [key: string]: iSocialMedia;
    };
  };
}

export const ownerData: OwnerData = {
  name: "Farzad",
  lastName: "Molaei",
  occupation: "Body Builder",
  contact: {
    phone: "+989123456789",
    email: "farzad_molaei@gmail.com",
    social: {
      instagram: {
        url: "https://www.instagram.com/farzad.molaei/",
        icon: "fab fa-instagram",
      },
      telegram: {
        url: "https://t.me/farzad_molaei",
        icon: "fab fa-telegram",
      },
    },
  },
};
