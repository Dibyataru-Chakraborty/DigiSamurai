import Image from "next/image";
import digisamurai from "@/assets/img/DigiSamurai.png";
import Link from "next/link";

export default function FOOter() {
  return (
    <>
      <section
        className="pt-10 relative bg-[#2a1616] text-[#c9aeb0] left-0 right-0  items-center px-4 sm:px-8 z-10"
        style={{ backgroundColor: "#2A1111" }}
      >
        <h2
          className="text-center text-4xl italic leading-[1.3] mb-6"
          style={{ letterSpacing: "0.02em" }}
        >
          Empowering minds with cutting-edge security,
          <br />
          compliance, and forensic solutions
        </h2>
        <hr className="border-t border-[#5a3f3f] mb-6 w-full h-[2px]" />
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-start justify-between py-8 space-y-8 md:space-y-0">
          {/* Left: Logo */}
          <div className="flex mb-6 md:mb-0 md:w-1/4">
            <Image
              alt="Red and black hooded logo, stylized with a red hood and black face silhouette"
              width={500}
              height={60}
              className="w-[200px] sm:w-[250px] lg:w-[220px] h-auto"
              src={digisamurai}
            />
          </div>

          {/* Right: Company Info (with vertical divider) */}
          <div className="md:w-2/3 flex justify-end md:pl-12">
            <div className="flex flex-col md:flex-row md:space-x-16 lg:border-l border-[#5a3f3f] pl-6">
              {/* Company Section */}
              <div className="flex flex-col mb-6 md:mb-0">
                <h3
                  className="text-[20px] font-normal mb-3"
                  style={{ fontFamily: "Jura", color: "#F2B2B2" }}
                >
                  Company
                </h3>
                <Link
                  className="text-[16px] font-light mb-1 hover:underline w-max"
                  href="/about"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  About us
                </Link>
                <Link
                  className="text-[16px] font-light hover:underline w-max"
                  href="#"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  Services
                </Link>
                <Link
                  className="text-[16px] font-light hover:underline w-max"
                  href="#"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  Academics
                </Link>
              </div>

              {/* Contact Section */}
              <div className="flex flex-col">
                <h3
                  className="text-[20px] font-normal mb-3"
                  style={{ fontFamily: "Jura", color: "#F2B2B2" }}
                >
                  Contact Us
                </h3>
                <address className="not-italic text-[14px] mb-3 leading-[1.4]">
                  <i className="fas fa-map-marker-alt mr-1" />
                  Block A, Sibani Apartment,
                  <br />
                  Palpara, Reckjoani More,
                  <br />
                  Rajarhat, Kolkata -700135
                </address>
                <Link
                  className="text-[14px] flex items-center mb-1 hover:underline w-max"
                  href="tel:+918910632224"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  <i className="fas fa-phone-alt mr-1" /> +918910632224
                </Link>
                <Link
                  className="text-[14px] flex items-center mb-3 hover:underline w-max"
                  href="tel:+917595887833"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  <i className="fas fa-phone-alt mr-1" /> +917595887833
                </Link>
                <Link
                  className="text-[14px] flex items-center mb-4 hover:underline w-max"
                  href="mailto:connect@digisamurai.co.in"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  <i className="fas fa-envelope mr-1" />{" "}
                  connect@digisamurai.co.in
                </Link>

                {/* Socials */}
                <div className="flex space-x-4 text-[#c9aeb0] text-[18px]">
                  <Link
                    aria-label="LinkedIn"
                    className="hover:text-[#d9b7b9]"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link
                    aria-label="YouTube"
                    className="hover:text-[#d9b7b9]"
                    href="#"
                  >
                    <i className="fab fa-youtube" />
                  </Link>
                  <Link
                    aria-label="Facebook"
                    className="hover:text-[#d9b7b9]"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link
                    aria-label="Twitter"
                    className="hover:text-[#d9b7b9]"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link
                    aria-label="Instagram"
                    className="hover:text-[#d9b7b9]"
                    href="#"
                  >
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#a18484]">
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="#" className="hover:underline">
              Cookies Settings
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Legal Notice
            </Link>
          </div>
          <span>©DIGISAMURAI 2022</span>
          <div></div>
        </div>
      </section>
    </>
  );
}
