import React, { useState } from 'react';
import './privacyPolicy.css';

function PrivacyPolicy() {
  const itemsPerPage = 1; // You can adjust this to the desired number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const totalPages = 3; // Set the total number of pages

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='main-privacy-policy'>
    <div className='container inner-privacy-policy pt-md-5 pb-md-5 pt-3 pb-3 d-flex flex-column justify-content-between'>
        {/* First Div */}
        {currentPage === 1 && (
            <div>
    <h1>PRIVACY NOTICE</h1>
    <p>Last updated Aug 31, 2023</p>

    <p>This privacy notice for Bluebot Social Media Company, doing business as Bluebot Social ("we," "us," or "our"),
        describes how and why we might collect, store, use, and/or share ("process") your information when you use our
        services ("Services"), such as when you:</p>

    <ul>
        <li>Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If
            you do not agree with our policies and practices, please do not use our Services. If you still have any
            questions or concerns, please contact us at <a href="mailto:legal@bluebotsocial.com">legal@bluebotsocial.com</a>.
        </li>
    </ul>

    <h2>SUMMARY OF KEY POINTS</h2>
    <p>This summary provides key points from our privacy notice, but you can find out more details about any of these topics
        by clicking the link following each key point or by using our table of contents below to find the section you are
        looking for.</p>

    <ul>
        <li>What personal information do we process? When you visit, use, or navigate our Services, we may process
            personal information depending on how you interact with us and the Services, the choices you make, and the
            products and features you use. Learn more about personal information you disclose to us.</li>
        <li>Do we process any sensitive personal information? We do not process sensitive personal information.</li>
        <li>Do we receive any information from third parties? We may receive information from public databases, marketing
            partners, social media platforms, and other outside sources. Learn more about information collected from other
            sources.</li>
        <li>How do we process your information? We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process
            your information for other purposes with your consent. We process your information only when we have a valid
            legal reason to do so. Learn more about how we process your information.</li>
        <li>In what situations and with which parties do we share personal information? We may share information in
            specific situations and with specific third parties. Learn more about when and with whom we share your
            personal information.</li>
        <li>What are your rights? Depending on where you are located geographically, the applicable privacy law may mean
            you have certain rights regarding your personal information. Learn more about your privacy rights.</li>
        <li>How do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject
            access request, or by contacting us. We will consider and act upon any request in accordance with applicable
            data protection laws.</li>
        <li>Want to learn more about what we do with any information we collect? Review the privacy notice in full.</li>
    </ul>

    <h2>TABLE OF CONTENTS</h2>
    <ol>
        <li><a href="#section1">WHAT INFORMATION DO WE COLLECT?</a></li>
        <li><a href="#section2">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
        <li><a href="#section3">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
        <li><a href="#section4">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
        <li><a href="#section5">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></li>
        <li><a href="#section6">IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</a></li>
        <li><a href="#section7">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
        <li><a href="#section8">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
        <li><a href="#section9">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
        <li><a href="#section10">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
        <li><a href="#section11">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
        <li><a href="#section12">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
        <li><a href="#section13">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
    </ol>
</div>

        )}

        {/* Second Div */}
        {currentPage === 2 && (
      <div>
    <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
    <p>Personal information you disclose to us</p>
    <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
    <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
    <p><strong>Sensitive Information:</strong> We do not process sensitive information.</p>
    <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

    <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
    <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
    <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>

    <h2>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
    <p><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
    <p>We may need to share your personal information in the following situations:</p>
    <ul>
        <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        <li><strong>Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
        <li><strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
    </ul>

    <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
    <p><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
    <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

    <h2>6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
    <p><strong>In Short:</strong> We may transfer, store, and process your information in countries other than your own.</p>
    <p>Our servers are located in. If you are accessing our Services from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" above), in and other countries.</p>
    <p>If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.</p>

        </div>
        
        )}

        {/* Third Div */}
        {currentPage === 3 && (
            <div>
  <h2>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
<p><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
<p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
<p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

<h2>8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
<p><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</p>
<p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:legal@bluebotsocial.com">legal@bluebotsocial.com</a>.</p>

<h2>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
<p><strong>In Short:</strong> You may review, change, or terminate your account at any time.</p>
<p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</p>
<p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
<p><strong>Account Information</strong></p>
<p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
<p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>

<h2>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
<p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>

<h2>11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
<p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
<p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

<h2>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
<p>If you have questions or comments about this notice, you may email us at <a href="mailto:legal@bluebotsocial.com">legal@bluebotsocial.com</a> or contact us by post at:</p>
<address>
    Bluebot Social Media Company
    General Delivery
    C/O Bluebot Social Media Company
    Scottsdale, AZ 85258
    United States
</address>

<h2>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
<p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>

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

export default PrivacyPolicy;
