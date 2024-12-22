import "./RefundPolicy.css";

const RefundPolicy = () => {
  document.title = "Refund Policy | AS Luxury Originals";

  return (
    <>
      <div className="ref-p">
        <h1>REFUND POLICY</h1>

        <div>
          <p>
            At ASL ORIGINALS, we prioritize your satisfaction and aim to provide
            a smooth and hassle-free shopping experience. Our Refund Policy is
            designed to clearly outline how refunds are handled, ensuring that
            you can shop with peace of mind. We're dedicated to making your
            experience with us as enjoyable as possible, and you can trust that
            we're here to assist you every step of the way
          </p>

          <article>
            <h3>1. Refund Eligibility</h3>
            <p>
              <span>Return Requirements</span> <br /> Refunds are only issued
              for items that meet our Return Policy and are in acceptable
              condition upon inspection.
            </p>
            <p>
              <span>Original Payment Method</span> <br /> Refunds will be
              processed to the original payment method used at the time of
              purchase. If an item is eligible for a refund but does not meet
              the return conditions, it will be sent back to you.
            </p>
          </article>

          <article>
            <h3>2. Refund Processing</h3>
            <p>
              <span>Item Inspection</span> <br /> Once we receive your returned
              item, our team will inspect it to ensure it meets our return
              standards. Items that pass inspection will move forward with the
              refund process.
            </p>

            <p>
              <span>Refund Timing</span> <br /> Refunds are generally processed
              within 5-7 business days after inspection. Please allow an
              additional 7-10 business days for the funds to appear in your bank
              or credit card account.
            </p>

            <p>
              <span>Refund Confirmation</span> <br /> You will receive an email
              notification confirming that your refund has been issued.
            </p>
          </article>

          <article>
            <h3>3. Non-Refundable Items</h3>
            <p>
              <span>Shipping and Fees</span> <br />
              Please note that shipping costs, customs duties, and local taxes
              paid at the time of purchase are non-refundable.
            </p>
            <p>
              <span>Non-Returnable Items</span> <br />
              Certain items are not eligible for refunds, including: Gift Cards,
              Final Sale items and Personalized or Customized items.
            </p>
          </article>
          <article>
            <h3>4. Refunds for Damaged or Incorrect Items</h3>
            <p>
              <span>Notification Timeline</span> <br />
              If you receive an item that is faulty or incorrect, please contact
              us within 48 hours of delivery at{" "}
              <a href="mailto:customerservice@asluxuryoriginals.com">
                customerservice@asluxuryoriginals.com
              </a>
              . Be sure to include photos and a description of the issue.
            </p>
            <p>
              <span>Refund for Faulty or Incorrect Items</span> <br />
              For items that are confirmed to be faulty or incorrect, we will
              issue a full refund, including any original shipping fees
            </p>
          </article>

          <article>
            <h3>5. Order Cancellations and Refunds</h3>
            <p>
              <span>Cancellation Policy</span> <br />
              You may cancel your order within 24 hours of placing it. Refunds
              for cancellations will be processed within 5-7 business days after
              cancellation approval.
            </p>
            <p>
              <span>Partial Refunds</span> <br />
              If returned items do not meet all the conditions for a full
              refund, we may issue a partial refund or offer store credit
              instead. We will notify you if this applies.
            </p>
            </article>

          <article>
            <p>If you have any questions or need further assistance with your refund, please don’t hesitate to reach out to our customer service team at <a href="mailto:customerservice@asluxuryoriginals.com"> customerservice@asluxuryoriginals.com</a>
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
