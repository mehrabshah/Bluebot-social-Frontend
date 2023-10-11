import React, { useState } from 'react';
import './privacyPolicy.css';

function Terms() {
  const itemsPerPage = 1; // You can adjust this to the desired number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const totalPages = 1; // Set the total number of pages

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='main-privacy-policy'>
    <div className='container inner-privacy-policy pt-md-5 pb-md-5 pt-3 pb-3 d-flex flex-column justify-content-between'>
        {/* Third Div */}
        {currentPage === 1 && (
            <div>
  <h1>Terms of Service</h1>
  <p>
    These Terms of Service ("Terms") govern your use of the Bluebot Social website, community, and mobile application (collectively, the "Service") provided by Bluebot Social Media Company ("Bluebot Social," "we," "us," or "our"). By accessing or using the Service, you agree to comply with these Terms. If you do not agree with any part of these Terms, please refrain from using the Service.
  </p>

  <h2>1. Subscriptions</h2>
  <p>
    Certain features of the Service may require a subscription ("Subscription"). Subscriptions are billed on a monthly or annual basis, depending on your chosen plan. Your Subscription will automatically renew at the end of each billing cycle unless you or we cancel it. We may revise Subscription terms and pricing with notice before your renewal. If you do not accept the changes, you may cancel your Subscription.
  </p>

  <h2>2. Free Trial</h2>
  <p>
    We may offer a free trial of our Service at our discretion. If you provide billing information during the trial, you will be charged when the trial ends. We reserve the right to modify or cancel the free trial offer at any time without notice.
  </p>

  <h2>3. Fee Changes</h2>
  <p>
    We may change Subscription fees, providing you with prior notice. Your continued use of the Service after fee changes take effect indicates your acceptance of the new fees.
  </p>

  <h2>4. Refunds</h2>
  <p>
    Refund requests for Subscriptions will be considered on a case-by-case basis at our sole discretion.
  </p>

  <h2>5. Content</h2>
  <p>
    You are responsible for the content you post on the Service. By posting content, you grant us the right to use, modify, and distribute it within the Service. You must own the content or have the necessary rights to use it.
    We reserve the right to remove or block content that violates these terms or is deemed inappropriate.
  </p>

  <h2>6. Community</h2>
  <p>
    Our Service includes a community feature. You are responsible for the content you post in the community. We do not control user-generated content but reserve the right to review and remove content at our discretion. We may also restrict or terminate access to the community without notice.
  </p>

  <h2>7. Accounts</h2>
  <p>
    You must provide accurate information when creating an account. Safeguard your password and notify us of any security breaches or unauthorized account use.
  </p>

  <h2>8. Intellectual Property</h2>
  <p>
    All content on the Service is our property and is protected by intellectual property laws. You may use the content for personal, non-commercial purposes, but any other use is prohibited.
  </p>

  <h2>9. Links to Other Websites</h2>
  <p>
    The Service may contain links to third-party websites. We are not responsible for the content or practices of these websites and recommend reviewing their terms and policies.
  </p>

  <h2>10. Termination</h2>
  <p>
    We may terminate or suspend your access to the Service for any reason, with or without notice. Upon termination, your rights to use the Service cease.
  </p>

  <h2>11. Indemnification</h2>
  <p>
    You agree to indemnify and hold us harmless from any claims, losses, or damages resulting from your use of the Service or violations of these Terms.
  </p>

  <h2>12. Limitation of Liability</h2>
  <p>
    We, including our directors, employees, and partners, will not be liable for any direct, indirect, or incidental damages arising from your use of the Service.
  </p>

  <h2>13. Governing Law</h2>
  <p>
    These Terms are governed by the laws of the Province of British Columbia and the laws of Canada, as applicable.
  </p>

  <h2>14. Changes</h2>
  <p>
    We may modify these Terms at our discretion. We will provide notice of material changes, and your continued use of the Service after such changes constitutes your acceptance of them.
  </p>

  <h2>15. Contact Us</h2>
  <p>
    If you have questions about these Terms, please contact us at care@bluebotsocial.com.
  </p>
</div>

        )}

        <div className="pagination d-flex align-items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span>{"<<"}</span>
          </button>
          <span className='ms-2 me-2'>{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span>{">>"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Terms;
