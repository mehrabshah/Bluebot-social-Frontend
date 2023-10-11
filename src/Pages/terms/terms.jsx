import React, { useState } from 'react';
import './privacyPolicy.css';

function Terms() {
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const totalPages = 7;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='main-privacy-policy'>
    <div className='container inner-privacy-policy pt-md-5 pb-md-5 pt-3 pb-3 d-flex flex-column justify-content-between'>
        {/* First Div */}
        {currentPage === 1 && (
            <div>
  <h1>AGREEMENT TO TERMS</h1>
  <h2>Effective Date: August 31, 2023</h2>
<p>We are Bluebot Social Media Company, doing business as Bluebot Social (“Company,” ”we,” “us,” “our,”), a company registered in Arizona, United States at General Delivery, ℅ Bluebot Social Media Company, Scottsdale, AZ 85258.

We operate the website bluebotsocial.com (the “Site”), as well as any other related products and services that refer to links to these legal terms (the “Legal Terms” ) (collectively, the “Services”).

You can contact us by email at hello@bluebotsocial.com or by mail to General Delivery, C/O Bluebot Social Media Company, Scottsdale, AZ 85258, United States.

These Legal Terms constitute a legally binding agreement made between you, whether personally or on my behalf of an entity (“you”), and Bluebot Social Media Company, concerning your access to or use of the Services. You agree that by accessing the Services, you have read, and understood, and agreed to be bound by all these Legal Terms. IF YOU DO NOT AGREE WITH ALL THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.

We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by help@bluebotsocial.com, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.

The services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.

We recommend that you print a copy of these Legal Terms for your records.</p>

<h1>TABLE OF CONTENTS</h1>
    <ol>
        <li>OUR SERVICES</li>
        <li>INTELLECTUAL PROPERTY RIGHTS</li>
        <li>USER REPRESENTATIONS</li>
        <li>USER REGISTRATION</li>
        <li>PURCHASES AND PAYMENT</li>
        <li>FREE TRIAL</li>
        <li>CANCELLATION</li>
        <li>PROHIBITED ACTIVITIES</li>
        <li>USER GENERATED CONTRIBUTIONS</li>
        <li>CONTRIBUTION LICENSE</li>
        <li>GUIDELINES FOR REVIEWS</li>
        <li>SOCIAL MEDIA</li>
        <li>SERVICES MANAGEMENT</li>
        <li>PRIVACY POLICY</li>
        <li>TERM AND TERMINATION</li>
        <li>MODIFICATIONS AND INTERRUPTIONS</li>
        <li>GOVERNING LAW</li>
        <li>DISPUTE RESOLUTION</li>
        <li>CORRECTIONS</li>
        <li>DISCLAIMER</li>
        <li>LIMITATIONS OF LIABILITY</li>
        <li>INDEMNIFICATION</li>
        <li>USER DATA</li>
        <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
        <li>CALIFORNIA USERS AND RESIDENTS</li>
        <li>MISCELLANEOUS</li>
        <li>CONTACT US</li>
    </ol>

</div>

        )}
        {currentPage === 2 && (
          <div>
  <h2>OUR SERVICES</h2>

<p>
The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so at their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
</p>

<p>
The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
</p>

<h2>INTELLECTUAL PROPERTY RIGHTS</h2>

<p><strong>Our intellectual property</strong></p>

<p>
We are the owner or the license of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the “Content”), as well as the trademarks, service marks, and logos contained therein (the “Marks”).
</p>

<p>
Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
</p>

<p>
The Content and Marks are provided in or through the Services “AS IS” for your personal, non-commercial use or internal business purpose only.
</p>

<p><strong>Your use of our Services</strong></p>

<p>
Subject to your compliance with these Legal Terms, including the “PROHIBITED ACTIVITIES” section below, we grant you a non-exclusive, non-transferrable, revocable license to:
</p>

<ul>
  <li>access the Services</li>
  <li>download or print a copy of any portion of the Content to which you have properly gained access.</li>
</ul>

<p>
Solely for your personal, non-commercial use or internal business purpose.
</p>

<p>
Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without express prior written permission.
</p>

<p>
If you wish to make any of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <a href="mailto:hello@bluebotsocial.com">hello@bluebotsocial.com</a>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
</p>

<p>
We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
</p>

<p>
Any breach of the intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
</p>

<p><strong>Your submissions and contributions</strong></p>

<p>
Please review this section and the “PROHIBITED ACTIVITIES” section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the services.
</p>

<p><strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback or other information about the Services (“Submissions”), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgement or compensation to you.</p>

<p><strong>Contributions:</strong> The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material (“Contributions”). Any Submission that is publicly posted shall also be treated as a Contribution.</p>

<p>
You understand that Contributions may be viewable by other users of the Services.
</p>

        </div>
        
        )}

        {currentPage === 3 && (
            <div>
  <h2>When you post Contributions, you grant us a license (including use of your name, trademarks, and logos):</h2>

<p>
By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to: use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part), and exploit your Contributions (including, without limitation, your image, name, and voice) for any purpose, commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other works, your Contributions, and to sublicense the licenses granted in this section.
</p>

<p>
Our use and distribution may occur in any media formats and through any media channels. This license includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.
</p>

<p><strong>You are responsible for what you post or upload:</strong></p>

<ul>
  <li>
    By sending us Submissions and/or posting Contributions through any part of the Services or making Contributions accessible through the Services by linking your account through the Services to any of your social networking accounts, you:
    <ol type="a">
      <li>confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission nor post any Contribution that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
      <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission and/or Contribution;</li>
      <li>warrant that any such Submission and/or Contributions are original to you or that you have the necessary rights and licenses to submit such Submissions and/or Contributions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions and/or Contributions; and</li>
      <li>warrant and represent that your Submissions and/or Contributions do not constitute confidential information.</li>
    </ol>
  </li>
  <li>You are solely responsible for your Submissions and/or Contributions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law.</li>
</ul>

<p>
<strong>We may remove or edit your Content:</strong> Although we have no obligation to monitor any Contributions, we shall have the right to remove or edit any Contributions at any time without notice if in our reasonable opinion we consider such Contributions harmful or in breach of these Legal Terms. If we remove or edit any such Contributions, we may also suspend or disable your account and report you to the authorities.
</p>

<h2>USER REPRESENTATIONS</h2>

<p>
By using the Services, you represent and warrant that:
</p>

<ol>
  <li>all registration information you submit will be true, accurate, current, and complete;</li>
  <li>you will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
  <li>you have the legal capacity and you agree to comply with these Legal Terms;</li>
  <li>you are not a minor in the jurisdiction in which you reside;</li>
  <li>you will not access the Services through automated or non-human means, whether through a bot, script, or otherwise;</li>
  <li>you will not use the Services for any illegal or unauthorized purpose; and</li>
  <li>your use of the Services will not violate any applicable law or regulation.</li>
</ol>

<p>
If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
</p>

<h2>USER REGISTRATION</h2>

<p>
You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
</p>

<h2>PURCHASES AND PAYMENT</h2>

<p>
We accept the following forms of payment:
</p>

<ul>
  <li>Visa</li>
  <li>Mastercard</li>
  <li>American Express</li>
  <li>Discover</li>
  <li>PayPal</li>
</ul>

<p>
You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.
</p>

<p>
You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. If your order is subject to recurring charges, then you consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order.
</p>

<p>
We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
</p>

</div>

        )}
        {currentPage === 4 && (
            <div>
 <h2>FREE TRIAL</h2>

<p>We offer a 30-day free trial to new users who register with the Services. The account will be charged according to the user's chosen subscription at the end of the free trial.</p>

<h2>CANCELLATION</h2>

<p>You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of the current paid term. If you are unsatisfied with our Services, please email us at <a href="mailto:robert@bluebotsocial.com">robert@bluebotsocial.com</a>.</p>

<h2>PROHIBITED ACTIVITIES</h2>

<p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

<ul>
  <li>
    <p>As a user of the Services, you agree not to:</p>
    <ul>
      <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
      <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
      <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
      <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
      <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
      <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
      <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
      <li>Engage in unauthorized framing of or linking to the Services.</li>
      <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
      <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
      <li>Delete the copyright or other proprietary rights notice from any Content.</li>
      <li>Attempt to impersonate another user or person or use the username of another user.</li>
      <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
      <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
      <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
      <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
      <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
      <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
      <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
      <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
      <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
      <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
      <li>Use the Services to advertise or offer to sell goods and services.</li>
      <li>Sell or otherwise transfer your profile.</li>
    </ul>
  </li>
</ul>


</div>

        )}
        {currentPage === 5 && (
            <div>
<h2>USER GENERATED CONTRIBUTIONS</h2>

<p>The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary.</p>

<p>When you create or make available any Contributions, you thereby represent and warrant that:</p>

<ol>
  <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
  <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
  <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
  <li>Your Contributions are not false, inaccurate, or misleading.</li>
  <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
  <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
  <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
  <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
  <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
  <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
  <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
  <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
  <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
</ol>

<p>Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.</p>
<h2>CONTRIBUTION LICENSE</h2>

<p>By posting your Contributions to any part of the Services or making Contributions accessible to the Services by linking your account from the Services to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.</p>

<p>This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.</p>

<p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services, and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>

<p>We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Services; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.</p>

<h2>GUIDELINES FOR REVIEWS</h2>

<p>We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria:</p>

<ol>
  <li>You should have firsthand experience with the person/entity being reviewed.</li>
  <li>Your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language.</li>
  <li>Your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability.</li>
  <li>Your reviews should not contain references to illegal activity.</li>
  <li>You should not be affiliated with competitors if posting negative reviews.</li>
  <li>You should not make any conclusions as to the legality of conduct.</li>
  <li>You may not post any false or misleading statements.</li>
  <li>You may not organize a campaign encouraging others to post reviews, whether positive or negative.</li>
</ol>

<p>We may accept, reject, or remove reviews at our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to the review.</p>
<h2>SOCIAL MEDIA</h2>

<p>As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a "Third-Party Account") by either:</p>

<ol>
  <li>Providing your Third-Party Account login information through the Services; or</li>
  <li>Allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account.</li>
</ol>

<p>You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.</p>

<p>By granting us access to any Third-Party Accounts, you understand that:</p>

<ol>
  <li>We may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the "Social Network Content") so that it is available on and through the Services via your account, including without limitation any friend lists.</li>
  <li>We may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account.</li>
</ol>

<p>Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Services.</p>

<p>Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, the Social Network Content may no longer be available on and through the Services. You will have the ability to disable the connection between your account on the Services and your Third-Party Accounts at any time.</p>

<p>PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Services. You can deactivate the connection between the Services and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such a Third-Party Account, except the username and profile picture that become associated with your account.</p>

<h2>SERVICES MANAGEMENT</h2>

<p>We reserve the right, but not the obligation, to:</p>

<ol>
  <li>Monitor the Services for violations of these Legal Terms.</li>
  <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities.</li>
  <li>In our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof.</li>
  <li>In our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems.</li>
  <li>Otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</li>
</ol>

<h2>PRIVACY POLICY</h2>

<p>We care about data privacy and security. Please review our Privacy Policy: <a href="https://bluebotsocial.com/privacypolicy">bluebotsocial.com/privacypolicy</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States and Germany. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States and Germany, then through your continued use of the Services, you are transferring your data to the United States and Germany, and you expressly consent to have your data transferred to and processed in the United States and Germany.</p>

<h2>TERM AND TERMINATION</h2>

<p>These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>

<p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>



</div>

        )}
        {currentPage === 6 && (
            <div>
 <h2>MODIFICATIONS AND INTERRUPTIONS</h2>

<p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>

<p>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.</p>

<h2>GOVERNING LAW</h2>

<p>These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Arizona applicable to agreements made and to be entirely performed within the State of Arizona, without regard to its conflict of law principles.</p>

<h2>DISPUTE RESOLUTION</h2>

<h3>Binding Arbitration</h3>

<p>If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA's Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which are available at the American Arbitration Association (AAA) website. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. The arbitration may be conducted
in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in the United States of America, Arizona. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.</p>

<p>If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in United States of America, Arizona, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Legal Terms.</p>

<p>In no event shall any Dispute brought by either Party related in any way to the Services be commenced more than one (1) years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</p>
<h2>19. CORRECTIONS</h2>

<p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>

<h2>20. DISCLAIMER</h2>

<p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON- INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</p>

<h2>21. LIMITATIONS OF LIABILITY</h2>

<p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE ONE (1) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>

</div>

        )}
        {currentPage === 7 && (
            <div>
 <h2>22. INDEMNIFICATION</h2>

<p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any breach of your representations and warranties set forth in these Legal Terms; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</p>

<h2>23. USER DATA</h2>

<p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>

<h2>24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>

<p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>

<h2>25. CALIFORNIA USERS AND RESIDENTS</h2>

<p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</p>

<h2>26. MISCELLANEOUS</h2>

<p>These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.</p>

<h2>27. CONTACT US</h2>

<p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>

<p>Bluebot Social Media Company<br></br>General Delivery<br></br>C/O Bluebot Social Media Company<br></br>Scottsdale, AZ 85258<br></br>United States<br></br>hello@bluebotsocial.com</p>

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
