import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)", paddingTop: "40px" }}>
      <div className="container border-top pt-5">
        <div className="row text-start">
          <div className="col-md-3 mb-4">
            <img src="media/images/finverselogo.png" alt="Logo" style={{ width: "60%" }} />
            <p className="mt-3 mb-1">&copy; 2010 - 2025, Finverse Broking Ltd.</p>
            <p>All rights reserved.</p>
            <div className="d-flex gap-3 mt-3">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaWhatsapp />
              <FaTelegramPlane />
            </div>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Philosophy</a></li>
              <li><a href="#">Press & media</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Finverse Cares (CSR)</a></li>
              <li><a href="#">Finverse.tech</a></li>
              <li><a href="#">Open source</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Support portal</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">How to file a complaint?</a></li>
              <li><a href="#">Status of your complaints</a></li>
              <li><a href="#">Bulletin</a></li>
              <li><a href="#">Circular</a></li>
              <li><a href="#">Z-Connect blog</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Open demat account</a></li>
              <li><a href="#">Minor demat account</a></li>
              <li><a href="#">NRI demat account</a></li>
              <li><a href="#">Commodity</a></li>
              <li><a href="#">Dematerialisation</a></li>
              <li><a href="#">Fund transfer</a></li>
              <li><a href="#">MTF</a></li>
              <li><a href="#">Referral program</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Upcoming IPOs</a></li>
              <li><a href="#">Brokerage charges</a></li>
              <li><a href="#">Market holidays</a></li>
              <li><a href="#">Economic calendar</a></li>
              <li><a href="#">Calculators</a></li>
              <li><a href="#">Markets</a></li>
              <li><a href="#">Sectors</a></li>
            </ul>
          </div>
        </div>

        <div className="text-muted mt-4" style={{ fontSize: "12px" }}>
                       <p>Finverse Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Finverse Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Finverse Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@Finverse.com, for DP related to dp@Finverse.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

 <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

 <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

 <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

 <p>Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3 Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

 <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

 <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Finverse and offering such services, please create a ticket here.</p>

 <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;