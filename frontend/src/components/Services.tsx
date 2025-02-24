import Container from "./Container";
import apiIntegrationImage from "/services/api_color.png";
import DatabaseManagementImage from "/services/database-management.png";
import ResponsiveDesignImage from "/services/responsive_design_color.png";
import MaintenanceAndSupportImage from "/services/technical-support_color.png";
import customWebsiteImage from "/services/web_design_color.png";
import WebsitePerformanceImage from "/services/website_performance_color.png";

const Services = () => {
  return (
    <section className="section-margin !px-4 sm:px-0" id="services">
      <Container>
        <h2 className="section-title">My Services</h2>
        <p className="section-description">
          Explore the range of services I offer to help you achieve your goals
          and vision.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="w-full py-[30px] px-[40px] rounded-lg bg-primaryCardBG">
            <img
              src={customWebsiteImage}
              className="w-[70px] h-auto mb-2.5"
              alt="custom website"
            />
            <h3 className="text-[22px] text-text-color mb-2.5 font-semibold font-monserrat">
              Custom Application Development
            </h3>
            <p className="text-base font-medium text-text-color2 font-monserrat">
              Delivering tailor-made web applications to address unique business
              needs, streamline processes, and drive growth.
            </p>
          </div>

          <div className="w-full py-[30px] px-[40px] rounded-lg bg-primaryCardBG">
            <img
              src={apiIntegrationImage}
              className="w-[70px] h-auto mb-2.5"
              alt="api integration"
            />
            <h3 className="text-[22px] text-text-color mb-2.5 font-semibold font-monserrat">
              API Development and Integration
            </h3>
            <p className="text-base font-inter font-medium text-text-color2">
              Ensuring smooth communication and data exchange between software
              systems through API development and integration.
            </p>
          </div>

          <div className="w-full py-[30px] px-[40px] rounded-lg bg-primaryCardBG">
            <img
              src={DatabaseManagementImage}
              className="w-[70px] h-auto mb-2.5"
              alt="database management"
            />
            <h3 className="text-[22px] text-text-color mb-2.5 font-semibold font-monserrat">
              Database Management
            </h3>
            <p className="text-base font-medium text-text-color2 font-monserrat">
              Designing and managing efficient, secure databases for seamless
              data storage, retrieval, and analysis.
            </p>
          </div>

          <div className="w-full py-[30px] px-[40px] rounded-lg bg-primaryCardBG">
            <img
              src={ResponsiveDesignImage}
              className="w-[70px] h-auto mb-2.5"
              alt="responsive design"
            />
            <h3 className="text-[22px] text-text-color mb-2.5 font-semibold font-monserrat">
              Responsive Design
            </h3>
            <p className="text-base font-medium text-text-color2 font-monserrat">
              Creating mobile-friendly websites with responsive design
              techniques for consistent user experiences across devices.
            </p>
          </div>

          <div className="w-full py-[30px] px-[40px] rounded-lg bg-primaryCardBG">
            <img
              src={WebsitePerformanceImage}
              className="w-[70px] h-auto mb-2.5"
              alt="website performance"
            />
            <h3 className="text-[22px] text-text-color mb-2.5 font-semibold font-monserrat">
              Website Performance Optimization
            </h3>
            <p className="text-base font-medium text-text-color2 font-monserrat">
              Enhancing website speed, performance, and user experience through
              meticulous optimization techniques.
            </p>
          </div>

          <div className="w-full py-[30px] px-[40px] rounded-lg bg-primaryCardBG">
            <img
              src={MaintenanceAndSupportImage}
              className="w-[70px] h-auto mb-2.5"
              alt="maintenance and support"
            />
            <h3 className="text-[22px] text-text-color mb-2.5 font-semibold font-monserrat">
              Maintenance and Support
            </h3>
            <p className="text-base font-medium text-text-color2 font-monserrat">
              Providing ongoing support, bug fixes, and updates to ensure
              website functionality, performance, and user satisfaction.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;

// 1. Custom Application Development: Develop tailor-made web applications that cater to your clients' unique needs. From small business tools to large-scale enterprise solutions, leverage your full stack expertise to design, build, and deploy robust applications.

// 2. API Development and Integration: Develop APIs (Application Programming Interfaces) to allow different software systems to communicate with each other. Enable seamless data exchange and integration between various applications, optimizing workflows and enhancing overall efficiency.

// 3. Database Management: Design and manage databases to store, retrieve, and organize vast amounts of data. Utilize database technologies like SQL or NoSQL to create efficient data models, ensure data integrity, and provide reliable data storage solutions.

// 4. Responsive Design and Mobile Optimization: Create mobile-friendly websites and applications that deliver a consistent user experience across different devices and screen sizes. Employ responsive design techniques to ensure optimal performance and usability on smartphones, tablets, and desktops.

// 5. Website Performance Optimization: Improve website speed, performance, and user experience by optimizing code, implementing caching techniques, and minimizing resource load times. Help clients achieve faster load times, higher search engine rankings, and increased user satisfaction.

// 6. Maintenance and Support: Provide ongoing support and maintenance services to keep websites and applications up to date, secure, and running smoothly. Offer troubleshooting, bug fixes, feature enhancements, and regular updates to accommodate changing requirements.

// Web Development: Build dynamic and responsive websites with seamless user experiences.
// Custom Application Development: Create tailor-made web applications to meet unique business needs.
// E-commerce Solutions: Develop secure and scalable online stores for effortless selling.
// API Development and Integration: Enable smooth data exchange between different software systems.
// Database Management: Design and manage efficient databases for data storage and retrieval.
// Content Management Systems (CMS): Empower clients to easily manage and update website content.
// Responsive Design and Mobile Optimization: Ensure optimal performance across devices and screen sizes.
// Website Performance Optimization: Enhance speed and user experience through code and resource optimization.
// Security and Testing: Implement robust security measures and conduct thorough testing for reliable solutions.
// Maintenance and Support: Provide ongoing support, bug fixes, and updates to keep websites running smoothly.

// business needs.
// E-commerce Solutions: Secure and scalable online stores for effortless selling.
// API Development and Integration: Smooth communication between software systems through API development and integration.
// Database Management: Efficient and secure data storage and retrieval solutions.
// Content Management Systems (CMS): Easy website content management for clients without technical expertise.
// Responsive Design and Mobile Optimization: Optimizing websites for consistent user experiences across devices.
// Website Performance Optimization: Enhancing website speed and performance for optimal user experience.
// Security and Testing: Robust security measures and comprehensive testing for reliable solutions.
// Maintenance and Support: Ongoing support, bug fixes, and updates to ensure website functionality.

// Web Development: Crafting responsive websites with compelling designs for seamless user experiences and effective digital presence.

// E-commerce Solutions: Building secure and scalable online stores to enable effortless selling, enhanced customer engagement, and increased revenue.
// API Development and Integration: Ensuring smooth communication and seamless data exchange between software systems through expert API development and integration.
// Database Management: Designing and managing efficient, secure databases for seamless data storage, retrieval, and analysis.
// Content Management Systems (CMS): Empowering clients with user-friendly CMS solutions, enabling easy website content management and updates.
// Responsive Design and Mobile Optimization: Creating mobile-friendly websites with responsive design techniques for consistent user experiences across devices.
// Website Performance Optimization: Enhancing website speed, performance, and user experience through meticulous optimization techniques and resource management.
// Security and Testing: Implementing robust security measures and conducting thorough testing to ensure reliable, secure, and high-performing solutions.
// Maintenance and Support: Providing ongoing support, bug fixes, and updates to ensure website functionality, performance, and user satisfaction.
