import CheckoutHeader from "./_component/CheckoutHeader";
import Help from "./_component/Help";
import ProductAdded from "./_component/ProductAdded";
import Returns from "./_component/Returns";
import Summary from "./_component/Summary";

const Checkout = () => {
  return (
    <section className="h-full w-full space-y-6 my-6">
      <div className="px-8 space-y-6">
        <CheckoutHeader />
        <div className="flex items-start gap-10 w-full flex-col lg:flex-row">
          <ProductAdded />
          <Summary />
        </div>
      </div>
      <Returns />
      <Help />
    </section>
  );
};

export default Checkout;
