'use client';
import InputField from './InputField';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '@/redux/slices/cartSlice';
import ReactModal from 'react-modal';
import CheckoutModal from './CheckoutModal';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: any;
}

const CheckoutHero = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const products = useSelector(selectCartItems);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart: Product[] = JSON.parse(storedCart);
    }
  }, []);

  // Update local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products));
  }, [products]);

  //  Subtotal
  const calculateSubtotal = (product: Product): number => {
    return product.price * product.quantity;
  };

  // Total
  const calculateTotal = (): number => {
    return products.reduce(
      (total: any, product: any) => total + calculateSubtotal(product),
      0
    );
  };
  const handlePlaceOrder = () => {
    setModalOpen(true);
  };
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 sm:gap-8 lg:gap-16">
      <div className="w-full lg:w-auto">
        <div className="text-3xl sm:text-4xl font-semibold text-center lg:text-left">
          <h2 className="text-4xl font-semibold">Billing details</h2>
        </div>
        <form action="" className="mt-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-8 lg:gap-16">
            <label htmlFor="">
              First Name
              <br />
              <input
                type="text"
                name="firstname"
                className="px-4 border w-[323px] sm:w-[223px] h-[75px] rounded-xl text-2xl outline-none my-2 sm:my-4"
              />
            </label>
            <label htmlFor="">
              Last Name
              <br />
              <input
                type="text"
                name="lastname"
                className="px-4 border w-[323px] sm:w-[223px] h-[75px] rounded-xl text-2xl outline-none my-2 sm:my-4"
              />
            </label>
          </div>
          <label htmlFor="" className="text-base font-medium">
            Company Name (Optional)
            <br />
            <InputField name="company" type="text" />
          </label>
          <br />
          <label htmlFor="" className="text-base font-medium">
            Country / Region
            <br />
            <InputField name="country" type="text" placeholder="Sri Lanko" />
          </label>
          <br />
          <label htmlFor="" className="text-base font-medium">
            Street Address
            <br />
            <InputField name="street" type="text" />
          </label>
          <br />

          <label htmlFor="" className="text-base font-medium">
            Town / City
            <br />
            <InputField name="town" type="text" />
          </label>
          <br />
          <label htmlFor="" className="text-base font-medium">
            Province
            <br />
            <InputField
              name="province"
              type="text"
              placeholder="Western Province"
            />
          </label>
          <br />
          <label htmlFor="" className="text-base font-medium">
            ZIP code
            <br />
            <InputField name="zipCode" type="text" />
          </label>
          <br />
          <label htmlFor="" className="text-base font-medium">
            Phone
            <br />
            <InputField name="phone" type="text" />
          </label>
          <br />
          <label htmlFor="" className="text-base font-medium">
            Email address
            <br />
            <InputField name="email" type="email" />
          </label>
          <br />
          <label htmlFor="" className="text-base font-medium">
            {''}
            <br />
            <InputField
              name="info"
              type="text"
              placeholder="Additional Information"
            />
          </label>
        </form>
      </div>

      <div className="w-full lg:w-[500px] pb-8 sm:pb-12 lg:pb-24 px-4 lg:px-8">
        <div className="py-9">
          <div className="flex justify-between text-2xl font-medium">
            <h3>Product</h3>
            <h3>Subtotal</h3>
          </div>
          {products.map((product) => (
            <div key={product.id} className="flex justify-between py-2 sm:py-4">
              <p>
                {product.name} x {product.quantity}
              </p>
              <p>Rs {calculateSubtotal(product).toFixed(2)}</p>
            </div>
          ))}
          <div className="flex justify-between pb-2 sm:pb-4">
            <p className="font-medium text-base">Subtotal</p>
            <p>Rs {calculateTotal().toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-base">Total</p>
            <p className="font-2xl font-bold text-[#B88E2F]">
              Rs {calculateTotal().toFixed(2)}
            </p>
          </div>
        </div>

        <div className="border-t border-[#9f9f9f] pt-6">
          <div className="flex items-center gap-4">
            <p className="w-[10px] h-[10px] bg-black rounded-full"> </p>
            <p>Direct Bank Transfer</p>
          </div>
          <div className="text-[#9f9f9f] py-4">
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="text-[#9f9f9f] font-medium py-4">
            <div className="flex items-center gap-4 ">
              <p className="w-[10px] h-[10px] rounded-full border"></p>
              <p>Direct Bank Transfer</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[10px] h-[10px] rounded-full border"></p>
              <p>Cash On Delivery</p>
            </div>
          </div>
          <div className="text-base">
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{' '}
              <span className="font-bold">privacy policy</span>.
            </p>
          </div>

          <div className="text-center pt-10">
            <input
              type="button"
              onClick={handlePlaceOrder}
              value="Place Order"
              className="border rounded-xl border-black px-24 py-5 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        className="modal"
        overlayClassName="overlay"
        contentLabel="Order Received Modal"
      >
        <CheckoutModal />
      </ReactModal>
    </section>
  );
};
export default CheckoutHero;
