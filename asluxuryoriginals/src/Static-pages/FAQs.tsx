import "./FAQs.css";
import React, { useState } from "react";

const FAQs = () => {

  document.title = "FAQs | AS Luxury Originals";

  const [openDetails, setOpenDetails] = useState<string | null>(null);

  // Function to handle details element open/close
  const handleDetailsToggle =
    (id: string) => (event: React.SyntheticEvent<HTMLDetailsElement>) => {
      if (event.currentTarget.open) {
        setOpenDetails(id);
      } else {
        if (openDetails === id) {
          setOpenDetails(null);
        }
      }
    };

  return (
    <>
      <article className="faqs">
        <h2>Frequently Asked Questions</h2>

        <div>
          <details
            id="details1"
            open={openDetails === "details1"}
            onToggle={handleDetailsToggle("details1")}
          >
            <summary>How do I place an order at ASL ORIGINALS</summary>
            <p>Placing an order at ASL ORIGINALS is easy! Here's how:</p>
            <li>
              Browse Our Collection: Visit our website and browse through our
              various categories of products.
            </li>
            <li>
              Add to Cart: When you find something you like, select the size,
              color (if applicable), and click on "Add to Cart."
            </li>
            <li>
              Review Your Cart: Once you're ready to checkout, click on the cart
              icon to review your items.
            </li>
            <li>
              Checkout: Provide your shipping information, select a payment
              method, and complete your purchase.
            </li>
            <li>
              Confirmation: After your order is placed, you'll receive an order
              confirmation email.
            </li>
          </details>

          <details
            id="details2"
            open={openDetails === "details2"}
            onToggle={handleDetailsToggle("details2")}
          >
            <summary>What payment methods do you accept?</summary>
            <p>
              We accept a variety of secure payment methods to make your
              shopping experience hassle-free: Credit/Debit Cards (Visa,
              MasterCard, American Express), Bank Transfers (for Nigerian
              customers), and Mobile Money (for Nigerian customers). If you
              experience any issues with payment, please reach out to our
              customer support team.
            </p>
          </details>

          <details
            id="details3"
            open={openDetails === "details3"}
            onToggle={handleDetailsToggle("details3")}
          >
            <summary>Do you offer international shipping?</summary>
            <p>
              Yes, we offer international shipping to select countries. Delivery
              times and shipping fees will vary depending on the destination. At
              checkout, you'll see the available shipping options and the
              corresponding costs for your location. Please note that customs
              duties, taxes, and import fees are the responsibility of the
              customer.
            </p>
          </details>

          <details
            id="details4"
            open={openDetails === "details4"}
            onToggle={handleDetailsToggle("details4")}
          >
            <summary>How do I track my order?</summary>
            <p>
              Once your order has been shipped, you'll receive an email with a
              tracking number. You can use this tracking number on the shipping
              carrier's website to check the status of your delivery. If you
              haven't received your tracking number, or if you experience any
              issues, feel free to contact us at
              <a href="mailto:customerservice@asluxuryoriginals.com">
                customerservice@asluxuryoriginals.com
              </a>
              .
            </p>
          </details>

          <details
            id="details5"
            open={openDetails === "details5"}
            onToggle={handleDetailsToggle("details5")}
          >
            <summary>Can I change or cancel my order?</summary>
            <p>
              You can request to cancel or modify your order within 24 hours of
              placing it. After that, we may have already processed or shipped
              your order, and changes may no longer be possible. To request a
              cancellation or change, please contact us as soon as possible at
              <a href="mailto:customerservice@asluxuryoriginals.com">
                
                customerservice@asluxuryoriginals.com
              </a>
              . We'll do our best to accommodate your request.
            </p>
          </details>

          <details
            id="details6"
            open={openDetails === "details6"}
            onToggle={handleDetailsToggle("details6")}
          >
            <summary>What is your return and refund policy?</summary>
            <p>
              We want you to be happy with your purchase! If for any reason
              you're not satisfied, we offer returns and refunds in accordance
              with our Return & Refund Policy. Here are the key details:
            </p>
            <li>
              Eligibility: Items must be returned in their original condition,
              unworn, and with all tags attached.
            </li>
            <li>
              Return Window: You have 14 days from the delivery date to initiate
              a return.
            </li>
            <li>
              Refund Processing: Refunds will be issued to the original payment
              method after the item is returned and inspected.
            </li>
            <p>
              Please visit our Return & Refund Policy page for more detailed
              information.
            </p>
          </details>

          <details
            id="details7"
            open={openDetails === "details7"}
            onToggle={handleDetailsToggle("details7")}
          >
            <summary>
              My order arrived damaged or incorrect. What do I do?
            </summary>
            <p>
              We apologize for any inconvenience caused. If your order arrives
              damaged, defective, or incorrect, please contact us within 48
              hours of receiving it. Provide us with photos and a detailed
              description of the issue.
            </p>
            <p>
              We will gladly assist you with a replacement or refund for the
              damaged or incorrect item.
            </p>
          </details>

          <details
            id="details8"
            open={openDetails === "details8"}
            onToggle={handleDetailsToggle("details8")}
          >
            <summary>Do you offer gift cards?</summary>
            <p>
              Yes, we offer gift cards that can be used to shop at ASL
              ORIGINALS. You can purchase a gift card directly from our website
              in various denominations. Simply select the gift card option
              during checkout. Gift cards are valid for 1 year from the date of
              purchase and can be used towards any products in our store.
            </p>
          </details>

          <details
            id="details9"
            open={openDetails === "details9"}
            onToggle={handleDetailsToggle("details9")}
          >
            <summary>How do I contact customer service?</summary>
            <p>
              If you have any questions or need assistance, you can reach us at
              <a href="mailto:customerservice@asluxuryoriginals.com">
                customerservice@asluxuryoriginals.com
              </a>
              <br /> Our customer service team at
              <a href="mailto:customerservice@asluxuryoriginals.com">
                customerservice@asluxuryoriginals.com
              </a>
              is available to assist you during business hours (Monday to
              Friday, 9 AM - 7 PM).
            </p>
          </details>

          <details
            id="details10"
            open={openDetails === "details10"}
            onToggle={handleDetailsToggle("details10")}
          >
            <summary>
              Can I modify my shipping address after placing an order?
            </summary>
            <p>
              If you notice that your shipping address is incorrect, please
              contact us immediately at
              <a href="mailto:customerservice@asluxuryoriginals.com">
                customerservice@asluxuryoriginals.com
              </a>
              . We'll try our best to update your address before your order is
              shipped. However, once the order has been processed or dispatched,
              changes may no longer be possible.
            </p>
          </details>

          <details
            id="details11"
            open={openDetails === "details11"}
            onToggle={handleDetailsToggle("details11")}
          >
            <summary>Do you offer wholesale or bulk purchasing?</summary>
            <p>
              Yes, we offer wholesale and bulk purchasing options for businesses
              and resellers. If you're interested in placing a large order or
              require a custom order, please reach out to our sales team at
              <a href="mailto:wholesale@asluxuryoriginals.com">
                
                wholesale@asluxuryoriginals.com
              </a>
              for more information.
            </p>
          </details>

          <details
            id="details12"
            open={openDetails === "details12"}
            onToggle={handleDetailsToggle("details12")}
          >
            <summary> What do I do if I forgot my account password?</summary>
            <p>
              If you've forgotten your password, simply click on the “Forgot
              Password” link on the login page. You will be prompted to enter
              your email address, and we will send you a link to reset your
              password.
            </p>
          </details>

          <details
            id="details13"
            open={openDetails === "details13"}
            onToggle={handleDetailsToggle("details13")}
          >
            <summary>Are your products authentic?</summary>
            <p>
              Yes! All products sold at ASL ORIGINALS are 100% authentic and
              sourced from trusted suppliers. We guarantee the quality and
              authenticity of every item you purchase from us.
            </p>
          </details>

          <details
            id="details14"
            open={openDetails === "details14"}
            onToggle={handleDetailsToggle("details14")}
          >
            <summary>Which shipping company do you use?</summary>
            <p>
              Domestic Orders (within Nigeria): For deliveries within Nigeria,
              we work with trusted local shipping partners as well as our own
              in-house logistics team. This ensures that your orders are handled
              with care and delivered efficiently to your doorstep, regardless
              of your location within the country.
            </p>
            <p>
              International Orders: For international shipments, we rely on DHL
              and UPS, two leading global courier services. These companies are
              known for their reliable and timely delivery, ensuring that your
              order reaches you quickly and safely, no matter where you are in
              the world.
            </p>
          </details>

          <details
            id="details15"
            open={openDetails === "details15"}
            onToggle={handleDetailsToggle("details15")}
          >
            <summary>How long does it take to process my order?</summary>
            <p>
              We aim to process all orders within 1 to 3 business days if placed
              between Monday and Friday. For orders made after 2:00 PM on
              Fridays, or over the weekend and during holidays, processing will
              begin on the next available business day, which is typically the
              following Monday.
            </p>
            <p>
              Please note, during busy periods, processing times may be slightly
              longer, but rest assured, we are committed to handling your order
              as quickly as possible.
            </p>
          </details>

          <details
            id="details16"
            open={openDetails === "details16"}
            onToggle={handleDetailsToggle("details16")}
          >
            <summary>How will my order be packaged?</summary>
            <p>
              We strive to ship your items in their original packaging whenever
              possible, especially for products that come with branded
              packaging. All orders are securely packed in standard boxes or
              protective bags/boxes to ensure safe delivery.
            </p>
            <p>
              In some cases, display items may not come with the original
              packaging. We have ASL ORIGINALS branded packaging, your order
              might be packed using that. We take extra care to package these
              items securely to prevent any damage during transit.
            </p>
          </details>

          <details
            id="details17"
            open={openDetails === "details17"}
            onToggle={handleDetailsToggle("details17")}
          >
            <summary>My order or refund is delayed. What's happening?</summary>
            <p>
              We always strive to ensure that your orders arrive promptly, but
              there are times when unexpected delays may occur. While we work
              hard to minimize such disruptions, here are some common reasons
              for delays in your order or refund:
            </p>
            <p>
              If the shipping address you provided differs from your billing
              address, we may need to take extra steps to verify your
              information as part of our security process. This verification
              helps protect both you and us from fraud, but it can occasionally
              lead to a short delay in processing your order.
            </p>
            <p>
              Another possible reason for delays is that some items may be
              backordered. This means that the product is temporarily out of
              stock, and we will need to wait for it to be restocked before we
              can ship it to you. We always do our best to keep you updated on
              such situations.
            </p>
            <p>
              For international orders, delays can sometimes occur if the
              shipping or billing information provided is incomplete or
              incorrect. It's important to ensure that all the required details
              are accurate to avoid any hold-ups during processing. If your
              order or refund is delayed, we sincerely apologize for any
              inconvenience. Please don't hesitate to reach out to our customer
              service team for an update or further assistance, and we will make
              every effort to resolve the situation as quickly as possible. Your
              satisfaction is important to us, and we appreciate your patience.
            </p>
          </details>

          <details
            id="details18"
            open={openDetails === "details18"}
            onToggle={handleDetailsToggle("details18")}
          >
            <summary>Will an item be restocked?</summary>
            <p>
              Yes! If you've found a product you love but it's out of stock in
              your size, don't worry! We have a "Notify Me" feature on the
              product page. Just click on "Notify Me," enter your email address,
              and we'll send you an alert when the item is available again
            </p>
            <p>
              If you need more information or assistance, our friendly Customer
              Service team is always here to help. Feel free to reach out
            </p>
          </details>

          <details
            id="details19"
            open={openDetails === "details19"}
            onToggle={handleDetailsToggle("details19")}
          >
            <summary>Sizing and care information</summary>
            <p>
              Not sure about your size? We provide detailed size guides for each
              product, tailored to the brand and fit. This can help you find the
              perfect fit with confidence.
            </p>
            <p>
              If you're still unsure or have any size-related questions, don't
              hesitate to reach out to our Customer Service team. You can
              contact us through live chat or email us at
              <a href="mailto:customerservice@asluxuryoriginals.com"> customerservice@asluxuryoriginals.com</a>
              and we'll be happy to assist you. We also provide care
              instructions for every product whenever possible, along with
              information about material composition to help you make informed
              decisions while shopping.
            </p>
          </details>

          <details
            id="details20"
            open={openDetails === "details20"}
            onToggle={handleDetailsToggle("details20")}
          >
            <summary>
              Do you offer discounts, sales or promotions? Do you have a loyalty
              program?
            </summary>
            <p>
              We highly value our customers and always strive to show our
              appreciation for your loyalty. While we don't have permanent sales
              or discounts running at all times, we do offer special promotions
              and seasonal sales throughout the year, so keep an eye out for
              those! We also run exclusive offers from time to time, which are
              announced through our newsletter and social media channels.
            </p>
            <p>
              Additionally, we take customer satisfaction seriously and want to
              reward our loyal shoppers. Our Loyalty Program allows you to earn
              points on your purchases, which can be redeemed for future
              discounts. This is just one of the many ways we show our gratitude
              for your continued support. Be sure to sign up for our newsletter
              and follow us on social media to stay updated on all our latest
              offers and promotions!
            </p>

            <p>
              If you still have questions or need further assistance, don't
              hesitate to reach out to our customer service team. We are
              always happy to help!
            </p>
          </details>
        </div>
      </article>
    </>
  );
};

export default FAQs;
