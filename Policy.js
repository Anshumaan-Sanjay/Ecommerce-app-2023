import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpeg"
            alt="Privacy Policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>We prioritize the protection of your personal information. Any data collected, including but not limited to, contact details and purchase history, is securely stored and used solely for enhancing your experience with our services. We do not share your information with third parties without your explicit consent. Our platform employs encryption and security measures to safeguard your data. By using our services, you agree to the terms outlined in this Privacy Policy. We may update this policy periodically, and it is advisable to review it to stay informed about how your data is handled. If you have any concerns or questions, please contact us. Your privacy is paramount to us.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;