import React from "react";
import { Helmet } from "react-helmet";

import './style/Privacy.css';


const Privacy = () => {
  return (
    <div className="bubble-gum-theme">
      <Helmet>
        <title>Privacy Policy - OneNightStudy.com</title>
        <meta name="description" content="Privacy policy of OneNightStudy.com" />
      </Helmet>
      <section className="privacy">
        <h1 className="heads bubble-gum-effect">Privacy Policy of OneNightStudy.com</h1>
        <p>
          Effective Date: When First Time Visited
        </p>
        <p>
          Welcome to OneNightStudy.com (the "Website"), your trusted hub for educational resources. This Privacy Policy outlines the types of information we collect from users of the Website, how we use and protect that information, and your rights and choices regarding your personal data. By accessing or using the Website, you agree to the terms of this Privacy Policy.
        </p>
        <h2 className="sub-heads bubble-gum-effect">1. Information We Collect:</h2>
        <p>
          1.1. Personal Information: When you visit or interact with our Website, we may collect certain personally identifiable information ("Personal Information"), such as your name, email address, and any other information voluntarily provided by you.
        </p>
        <p>
          1.2. Non-Personal Information: We may also collect non-personally identifiable information ("Non-Personal Information") automatically when you use the Website. This may include technical information, such as your IP address, browser type, operating system, and usage data.
        </p>
        <h2 className="sub-heads bubble-gum-effect">2. Use of Information:</h2>
        <p>
          2.1. Personal Information: We may use your Personal Information to communicate with you, provide the requested services, respond to your inquiries, and improve the overall user experience. We may also use your Personal Information to send you relevant educational content, updates, and promotional offers. You can opt-out of receiving such communications at any time.
        </p>
        <p>
          2.2. Non-Personal Information: Non-Personal Information is primarily used to analyze and enhance the performance of our Website, troubleshoot technical issues, and gather demographic information for aggregate use.
        </p>
        <h2 className="sub-heads bubble-gum-effect">3. Data Security:</h2>
        <p>
          We take reasonable measures to protect the security of your Personal Information and ensure that it is treated in accordance with this Privacy Policy. However, please note that no method of data transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute data security.
        </p>
        <h2 className="sub-heads bubble-gum-effect">4. Third-Party Links:</h2>
        <p>
          Our Website may contain links to third-party websites or resources. Please note that we are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites or services before providing any Personal Information.
        </p>
        <h2 className="sub-heads bubble-gum-effect">5. Cookies and Tracking Technologies:</h2>
        <p>
          We may use cookies and similar tracking technologies to enhance your browsing experience, personalize content, and analyze usage patterns. You can manage your cookie preferences through your browser settings, but please be aware that disabling cookies may limit certain features and functionality of the Website.
        </p>
        <h2 className="sub-heads bubble-gum-effect">6. Children's Privacy:</h2>
        <p>
          Our Website is not intended for individuals under the age of 13. We do not knowingly collect or solicit Personal Information from children. If we become aware that we have collected Personal Information from a child without parental consent, we will take steps to remove that information from our servers.
        </p>
        <h2 className="sub-heads bubble-gum-effect">7. Changes to the Privacy Policy:</h2>
        <p>
          We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on the Website. We encourage you to periodically review this Privacy Policy for any updates.
        </p>
        <h2 className="sub-heads bubble-gum-effect">8. Contact Us:</h2>
        <p className="mb-0 pb-4">
          If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at [insert contact information].
        </p>
        <p className="disclaimer">
          By continuing to use our Website, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
        </p>
        <h1></h1>
      </section>
    </div>
  );
};

export default Privacy;
