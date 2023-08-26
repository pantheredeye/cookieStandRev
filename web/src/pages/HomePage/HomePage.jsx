import { useState } from 'react';
import { Link } from '@redwoodjs/router';
import { OrderForm } from './OrderForm';

const HomePage = () => {
  const [orderItems, setOrderItems] = useState([]);

  return (
    <div className="home">
      <header>
        <p>The Cookie Stand</p>
      </header>
      <main>
        <section className="orderform">
          <OrderForm orderItems={orderItems} setOrderItems={setOrderItems} />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
