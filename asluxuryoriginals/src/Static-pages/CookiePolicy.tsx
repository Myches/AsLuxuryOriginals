import "./RefundPolicy.css";

const CookiePolicy = () => {
  document.title = "Cookie Policy | AS Luxury Originals";

  return (
    <>
      <div className="ref-p">
        <h1>COOKIE POLICY</h1>

        <div>
          <p>
            At ASL ORIGINALS, we use cookies and similar tracking technologies
            to enhance your experience on our website. This Cookie Policy
            explains what cookies are, how we use them, and how you can manage
            your preferences. By continuing to use our website, you consent to
            the use of cookies as described in this policy.
          </p>

          <article>
            <h3>What Are Cookies?</h3>
            <p>
              Cookies are small text files that are placed on your device
              (computer, smartphone, or tablet) when you visit a website. These
              files help store information about your interactions with the
              website and enable us to improve your browsing experience.
            </p>
            <p>There are two types of cookies we may use:</p>
            <p>
              <span>Session Cookies:</span> These are temporary cookies that are
              erased from your device once you close your browser. They are used
              to store temporary information, such as your shopping cart, during
              your visit to our site.
            </p>

            <p>
              <span>Persistent Cookies:</span> These cookies remain on your
              device for a set period of time (usually for a few days to
              months). They are used to remember your preferences and login
              details for future visits, so you don't have to re-enter them.
            </p>
          </article>

          <article>
            <h3>How We Use Cookies</h3>

            <p>We use cookies for a variety of purposes, including:</p>
            <p>
              <span>To Enhance Your Shopping Experience:</span> To process and
              complete your orders, including shipping, billing, and
              communication regarding your purchase.
            </p>

            <p>
              <span>To Improve Website Performance:</span> Cookies allow us to
              track how you interact with our website. This data helps us
              understand which pages are most popular, how users navigate our
              site, and where we can improve the overall user experience.
            </p>

            <p>
              <span>For Personalized Content and Advertising:</span> Cookies
              help us provide more relevant product recommendations, tailored
              offers, and ads based on your browsing behavior. This can include
              content or promotions related to items you have shown interest in
              or previously purchased.
            </p>

            <p>
              <span>To Enable Social Media Features: </span> If you share our
              content on social media platforms, cookies from those sites will
              be used to enable the sharing functionality.
            </p>
          </article>

          <article>
            <h3>Third-Party Cookies</h3>
            <p>
              We may also allow trusted third-party services to place cookies on
              your device. These third-party cookies may be used to:
            </p>
            <p>
              <li>Analyze website performance.</li>
              <li>Serve personalized ads based on your browsing behavior.</li>
              <li>Provide social media sharing features.</li>
            </p>

            <p>
              These third-party services may include Google Analytics, Facebook,
              Instagram, and other ad networks. These third parties use their
              own cookies and are subject to their own privacy policies.
            </p>
          </article>

          <article>
            <h3>How to Manage Cookies</h3>
            <p>
              You have the right to control which cookies are set on your
              device. Here's how you can manage your cookie preferences:
            </p>

            <p>
              {" "}
              <span>Cookie Settings on Your Browser:</span> Most web browsers
              allow you to manage cookie preferences through their settings. You
              can choose to block all cookies, accept only certain cookies, or
              be notified when a cookie is being set. However, please note that
              blocking cookies may affect the functionality of some parts of our
              website, such as the shopping cart or checkout process.
            </p>

            <p>
              <span>Opting Out of Targeted Advertising:</span> You can opt out
              of targeted advertising from third-party advertisers by visiting
              their opt-out pages (such as the Digital Advertising Alliance
              (DAA) or Network Advertising Initiative (NAI) )or adjusting your
              privacy settings on platforms like Google or Facebook.
            </p>

            <p>
              <span>Clear Cookies:</span> You can delete cookies that have
              already been set in your browser settings. However, please note
              that clearing cookies may log you out of your account and reset
              preferences.
            </p>
          </article>

          <article>
            <h3>Changes to This Cookie Policy</h3>
            <p>We may update our Cookie Policy from time to time to reflect changes in technology or legal requirements. Any updates will be posted on this page, and the "Last Updated" date will be revised accordingly. We encourage you to review this policy periodically to stay informed about how we use cookies.
            </p>

            <p>
            If you have any questions or concerns about our use of cookies, or if you would like more information about managing your cookie preferences, please contact at <a href="mailto:customerservice@asluxuryoriginals.com">
                customerservice@asluxuryoriginals.com.
              </a>
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
