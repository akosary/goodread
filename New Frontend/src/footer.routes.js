// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Newton (Book Club)",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "#",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },

    {
      icon: <YouTubeIcon />,
      link: "#",
    },
  ],
  menus: [
    {
      name: "Website",
      items: [
        { name: "about us", href: "http://localhost:3000/pages/landing-pages/about-us" },
        { name: "Contact us", href: "http://localhost:3000/pages/landing-pages/contact-us" },
      ],
    },
    {
      name: "Updates",
      items: [
        { name: "Get in touch", href: "#" },
        { name: "Get in touch", href: "#" },
        { name: "Get in touch", href: "#" },
        { name: "Get in touch", href: "#" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "#" },
        { name: "knowledge center", href: "#" },
        { name: "custom development", href: "#" },
        { name: "sponsorships", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Customization &copy; {date} Project Team by{" "}
      <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        &quot; Ahmed Kosary - Ahmed Ramadan - Nahed Fathy - Nesma Elsayed - Kareem Shabana &quot;
      </MKTypography>
      .
    </MKTypography>
  ),
};
