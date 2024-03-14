import Container from "@/components/ui/container";
import Summary from "../cart/components/Summary";
import AcoountDetails from "./components/AcoountDetails";

const AccountPage = () => {
  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Данные аккаунта</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7 bg-slate-400">
            {/* {cart.items.length === 0 && (
              <p className="text-neutral-500">No items added to cart</p>
            )}
            <ul>
              {cart.items.map((item) => (
                <CartItem key={item._id} data={item} />
              ))}
            </ul> */}
          </div>
          <AcoountDetails />
        </div>
      </div>
    </Container>
  );
};

export default AccountPage;
