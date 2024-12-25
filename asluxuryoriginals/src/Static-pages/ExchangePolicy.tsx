import "./RefundPolicy.css";

const ExchangePolicy = () => {
  document.title = "Exchange Policy | AS Luxury Originals";

  return (
    <>
      <div className="ref-p">
        <h1>EXCHANGE POLICY</h1>

        <div>
          <p>
            At ASL ORIGINALS, we understand that sometimes a product might not
            meet your expectations, and you may need to exchange it for a
            different size, color, or style. Our Exchange Policy is designed to
            ensure a smooth and hassle-free process for our customers.
          </p>

          <article>
            <h3>Eligibility for Exchange</h3>
            <p>
              <li>
                The item must be returned within 14 days of the delivery date.
              </li>
              <li>
                The product must be in its original condition, unworn, unwashed,
                and free from any damage or stains.
              </li>
              <li>All original packaging, tags, and labels must be intact.</li>
              <li>
                Customized, personalized, or final-sale items are not eligible
                for exchange.
              </li>
            </p>
          </article>

          <article>
            <h3>Exchange Process</h3>

            <p>
              To initiate an exchange, please contact our Customer Service team
              at{" "}
              <a href="mailto:customerservice@asluxuryoriginals.com">
                customerservice@asluxuryoriginals.com.
              </a>{" "}
              <br />
              Please include your order number and specify the item you wish to
              exchange
            </p>

            <p>
              Once your exchange request is approved, we'll send you
              step-by-step instructions for returning your item. Please ensure
              the item is securely packaged to avoid any damage during shipping.
            </p>

            <p>
              Customers are responsible for return shipping, unless the item
              received is incorrect or defective.
            </p>

            <p>
              After we receive your return, our Inspection team will carefully
              examine the item to ensure it meets the conditions for an
              exchange. Items that do not meet these standards will be sent back
              to you and are not eligible for exchange. If your returned item
              passes inspection, we'll process the exchange and dispatch the
              replacement item within 5-7 business days.
            </p>
          </article>

          <article>
            <h3>Exchange Options</h3>
            <p>
              If the product you purchased doesn’t fit or you prefer a different
              color, you can exchange it for the same item in your desired size
              or color, as long as it’s available.
            </p>
            <p>
              If you’d like a completely different item, we can help you swap
              your original purchase for another product. If the new item costs
              more, you’ll just need to pay the difference
            </p>
          </article>

          <article>
            <h3>Shipping Costs for Exchanges</h3>
            <p>
              Domestic exchange within the same country or region, customers are
              responsible for covering the cost of shipping the item back to us
              but we will cover the cost of shipping the replacement item to
              you.
            </p>

            <p>
              {" "}
              International exchange for other countries, customers are
              responsible for both the cost of returning the item to us and the
              shipping cost for the replacement item. If applicable, any customs
              duties or fees will also be the responsibility of the customer.
            </p>
          </article>

          <article>
            <h3>Time-frame for Processing Exchanges</h3>
            <p>
              {" "}
              Exchanges are typically completed within 5-7 business days after
              we receive and inspect the returned item.
            </p>

            <p>
              Once your exchange is processed, you’ll receive a confirmation
              email with all the details, including tracking information for
              your replacement item.
            </p>
          </article>

          <article>
            <h3>Items Not Eligible for Exchange</h3>
            <p>
              <li>Products marked as "final sale" or "clearance." </li>
              <li>
                Customized or personalized items made specifically for you.
              </li>
              <li>
                Items that do not meet our return eligibility criteria, such as
                those missing original tags, damaged, or worn. Please ensure
                your return meets our guidelines to avoid any issues.
              </li>
            </p>
          </article>

          <article>
            <h3>Damaged or Defective Items
            </h3>
            <p>      
            If you received an item that is damaged, defective, or incorrect, we’re here to make it right. Please contact us immediately at <a href="mailto:customerservice@asluxuryoriginals.com">
                customerservice@asluxuryoriginals.com
              </a> or call <a href="tel:+2349169900555">+2349169900555</a> with your order details </p>

              <p>

We will prioritize replacing the damaged or defective product or, if necessary, issue a full refund. You won’t be responsible for any additional costs in these cases.  
              </p>
          </article>

          <article>
            <h3>Important Notes
            </h3>

            <p>All exchanges depend on product availability. If the item you want is out of stock, we’ll provide you with either store credit or a refund, based on your preference.</p>
            <p>We reserve the right to decline exchanges if the returned item doesn’t meet our requirements, such as being damaged, used, or missing original tags and packaging.
            </p>
            <p>For any questions about our Exchange Policy, please feel free to reach out to us at <a href="mailto:customerservice@asluxuryoriginals.com">
                customerservice@asluxuryoriginals.com
              </a></p>
          </article>
        </div>
      </div>
    </>
  );
};

export default ExchangePolicy;
