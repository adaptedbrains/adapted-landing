import React from "react";

import { loadStripe } from "@stripe/stripe-js";

import { useState } from "react";
import { PaymentCss } from "./style";
import Header from "../../components/Header";

import {
  CardElement,
  Elements,
  useElements,
  useStripe,
  IbanElement,
} from "@stripe/react-stripe-js";

// Custom styling can be passed to options when creating an Element.
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const IBAN_ELEMENT_OPTIONS = {
  supportedCountries: ["SEPA"],
  style: {
    base: {
      color: "#32325d",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',

      fontSmoothing: "antialiased",
      fontSize: "14px",
      "::placeholder": {
        Content: "Card",
        color: "#aab7c4",
      },
      ":-webkit-autofill": {
        color: "#32325d",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
      ":-webkit-autofill": {
        color: "#fa755a",
      },
    },
  },
};

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
    } else {
      setError(null);
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="card-element" className="t">
          Card
        </label>
        <CardElement
          id="card-element"
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleChange}
        />

        <div className="card-errors" role="alert">
          {error}
        </div>
      </div>

      <button type="submit" className="payment-button">
        Pay
      </button>
    </form>
  );
};
const Iban = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const [bankName, setBankName] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  // Reset the demo.
  const handleReset = () => {
    setPaymentMethod(null);
    setIsLoading(false);
    setName("");
    setEmail("");
    setBankName("");
    setError(null);
    elements.getElement(IbanElement).clear();
  };

  const handleChange = (event) => {
    // Handle real-time validation errors from the iban Element.
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }

    // Display bank name corresponding to IBAN, if available.
    if (event.bankName) {
      setBankName(event.bankName);
    } else {
      setBankName(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const ibanElement = elements.getElement(IbanElement);
    const result = await stripe.createPaymentMethod({
      type: "sepa_debit",
      sepa_debit: ibanElement,
      billing_details: {
        name,
        email,
      },
    });

    setIsLoading(false);

    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
    } else {
      setError(null);
      // Normally you would send the PaymentMethod to your server.
      // In this demo we store it in state and display it.
      setPaymentMethod(result.paymentMethod);
    }
  };

  return (
    // Wrapper to handle display of loading spinner and demo result.
    // <Wrapper
    //   isLoading={isLoading}
    //   paymentMethod={paymentMethod}
    //   onReset={handleReset}
    // >
    <form onSubmit={handleSubmit}>
      <div className="form-row inline">
        {/* <div className="col">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Jenny Rosen"
            required
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="col">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="name"
            type="email"
            placeholder="jenny.rosen@example.com"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div> */}
      </div>
      <div className="form-row">
        <label htmlFor="iban-element">IBAN</label>
        <IbanElement
          id="iban-element"
          options={IBAN_ELEMENT_OPTIONS}
          onChange={handleChange}
        />
      </div>
      <div id="bank-name" className={bankName ? "visible" : ""}>
        {bankName}
      </div>

      <div id="error-message" role="alert" className={error ? "visible" : ""}>
        {error}
      </div>

      {/* Display mandate acceptance text. */}
      <div id="mandate-acceptance">
        By providing your IBAN and confirming this payment, you are authorizing
        Rocketship Inc. and Stripe, our payment service provider, to send
        instructions to your bank to debit your account and your bank to debit
        your account in accordance with those instructions. You are entitled to
        a refund from your bank under the terms and conditions of your agreement
        with your bank. A refund must be claimed within 8 weeks starting from
        the date on which your account was debited.
      </div>
      <button type="submit" className="payment-button">
        Submit Payment
      </button>
    </form>
    // </Wrapper>
  );
};

// Setup Stripe.js and the Elements provider
const stripePromise = loadStripe(
  "pk_test_51GzgePJe4RiGSfq3nXKxGTIh7k0hSUEWXgRphPrpse3TEVeGHeRJSlBAn4hiDBW54HWKz7hiYqzKvtXJNe7mJNmR00VvVgsHwg"
);

const Payment = () => {
  const [card, setCard] = useState(true);
  const [iban, setIban] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [dropdown, setDropdown] = useState(true);
  const changeCard = () => {
    setCard(true);
    setIban(false);
  };
  const changeBank = () => {
    setIban(true);
    setCard(false);
  };
  const toggle = () => {
    setDropdown(!dropdown);
    console.log(dropdown);
  };

  return (
    <>
      <Elements stripe={stripePromise}>
        <PaymentCss>
          <Header />

          <div className="checkout">
            <form id="payment-form">
              <p className="instruction">
                <span>Complete</span>/<span id="generate">generate</span> your
                shipping and payment details below
              </p>
              <section>
                <h2>Shipping &amp; Billing Information</h2>
                <fieldset>
                  <label>
                    <span>Name</span>
                    <input
                      name="name"
                      className="field"
                      placeholder="Jenny Rosen"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      name="email"
                      type="email"
                      className="field"
                      placeholder="jenny@example.com"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </label>
                  <label>
                    <span>Address</span>
                    <input
                      name="address"
                      className="field"
                      placeholder="185 Berry Street Suite 550"
                      value={address}
                      onChange={(event) => {
                        setAddress(event.target.value);
                      }}
                    />
                  </label>
                  <label>
                    <span>City</span>
                    <input
                      name="city"
                      className="field"
                      placeholder="San Francisco"
                      value={city}
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                    />
                  </label>
                  <label className="state">
                    <span>State</span>
                    <input
                      name="state"
                      className="field"
                      placeholder="CA"
                      value={state}
                      onChange={(event) => {
                        setState(event.target.value);
                      }}
                    />
                  </label>
                  <label className="zip">
                    <span>ZIP</span>
                    <input
                      name="postal_code"
                      className="field"
                      placeholder="94107"
                      value={zip}
                      onChange={(event) => {
                        setZip(event.target.value);
                      }}
                    />
                  </label>
                  <label className="select">
                    <span>Country</span>
                    <div id="country" className="field US">
                      <select
                        name="country"
                        defaultValue={"US"}
                        onChange={(event) => {
                          setCountry(event.target.value);
                        }}
                      >
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="BE">Belgium</option>
                        <option value="BR">Brazil</option>
                        <option value="CA">Canada</option>
                        <option value="CN">China</option>
                        <option value="DK">Denmark</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="HK">Hong Kong</option>
                        <option value="IE">Ireland</option>
                        <option value="IT">Italy</option>
                        <option value="JP">Japan</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MY">Malaysia</option>
                        <option value="MX">Mexico</option>
                        <option value="NL">Netherlands</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NO">Norway</option>
                        <option value="PT">Portugal</option>
                        <option value="SG">Singapore</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                      </select>
                      <i class="fas fa-chevron-down"></i>
                    </div>
                    {/* <div
                      className={`dropdown ${dropdown ? "is-active" : null}`}
                    >
                      <div className="dropdown-trigger">
                        <button
                          className="button"
                          type="button"
                          aria-haspopup="true"
                          aria-controls="dropdown-menu"
                          onClick={toggle}
                        >
                          <span>Dropdown button</span>
                          <span className="icon is-small">
                            <i
                              className="fas fa-angle-down"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </button>
                      </div>
                      <div
                        className="dropdown-menu"
                        id="dropdown-menu"
                        role="menu"
                      >
                        <div className="dropdown-content">
                          <div className="">Australia</div>
                          <div className="">United States</div>
                        </div>
                      </div>
                    </div> */}
                  </label>
                </fieldset>
              </section>

              <section>
                <h2>Payment Information</h2>
                <nav id="payment-methods" className="visible">
                  <button
                    className={`tab ${card ? "active" : ""}`}
                    onClick={changeCard}
                    type="button"
                  >
                    CARD
                  </button>
                  <button
                    className={`tab ${iban ? "active" : ""}`}
                    onClick={changeBank}
                    type="button"
                  >
                    SEPA DIRECT DEBIT
                  </button>
                </nav>

                {card ? (
                  <div className="card-pay">
                    <CheckoutForm />
                  </div>
                ) : (
                  <div className="bank">
                    <Iban />
                  </div>
                )}
              </section>
            </form>
          </div>
        </PaymentCss>
      </Elements>
    </>
  );
};

// POST the token ID to your backend.
async function stripeTokenHandler(token) {
  const response = await fetch("/charge", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: token.id }),
  });

  return response.json();
}

export default Payment;
