import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Creating a comprehensive e-commerce app involves incorporating essential features such as user authentication, organized product listings, an intuitive shopping cart and checkout process, order history, and tracking. Additionally, advanced features like AR/VR integration, chatbot assistance, social media connectivity, and personalized recommendations enhance user experience. Technical considerations such as responsive design, scalability, API integration, and security measures are crucial. Ensuring compliance with data protection regulations is also important. Conducting market research and user testing for ongoing improvement is recommended.
            </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;