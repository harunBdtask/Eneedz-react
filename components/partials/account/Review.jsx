import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import AccountMenuSidebar from "~/components/partials/account/modules/AccountMenuSidebar";

const Review = () => {
  const [authCookie] = useCookies(["auth"]);
  const [addressLists, setAddressList] = useState(null);


  useEffect(() => {
    getAddresses();
  }, []);

  async function getAddresses() {
    const formData = new FormData();

    formData.append("customer_id", authCookie.auth?.id);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CUSTOMER_DASHBOARD}/customer_address`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (result?.response_status === 200) {
      setAddressList(result.data.address_list);
    } else {
      toast.error(result.message);
    }
  }





  const accountLinks = [
    {
      text: "Account Information",
      url: "/account/user-information",
      icon: "icon-user",
    },
    {
      text: "Invoices",
      url: "/account/invoices",
      icon: "icon-papers",
    },
    {
      text: "Track Order",
      url: "/account/order-tracking",
      icon: "icon-papers",
    },
    {
      text: "Payment History",
      url: "/account/payment-history",
      icon: "icon-cog",
    },
    {
      text: "Address",
      url: "/account/address",
      icon: "icon-map-marker",
      // active: true,
    },
    {
      text: "Change Password",
      url: "/account/change-password",
      icon: "icon-lock",
    },
  ];

  return (
    <section className="ps-my-account ps-page--account">
      <div className="ps-container">
        <div className="row">
          <div className="col-lg-3">
            <div className="ps-page__left">
              <AccountMenuSidebar data={accountLinks} />
            </div>
          </div>

          <div className="col-lg-9">
            <div className="ps-section--account-setting">
              <div className="ps-section__header">
                <h3> Reviews</h3>
              </div>
              <div className="ps-section__content">
                {/* item start */}
                <div className="my-reviews-layout my-reviews-group">
                  <div className="my-reviews-layout-main">
                    <div className="my-reviews-group-items">
                      <div className="my-reviews-group-header">
                        <span className="my-reviews-item-bought-time">Purchased on 14 Aug 2021</span>
                      </div>
                      <div className="my-reviews-item my-reviews-group-item">
                        <div className="my-reviews-item-pic">
                          <a href="#" rel="noopener noreferrer" target="_blank">
                            <img src="https://static-01.daraz.com.bd/p/692b216be0b78b824c161dcea2b8ed52.jpg"></img>
                          </a>
                        </div>
                        <div className="my-reviews-item-wrapper">
                          <a className="my-reviews-item-title" href="#" rel="noopener noreferrer" target="_blank">supreme new caps</a>
                          <div className="my-reviews-item-sku">Size:Int: One size, Color Family:BLACK</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-reviews-layout-minor">
                    <div className="my-reviews-layout-sep">
                      <div className="my-reviews-layout-sep-inner"></div>
                    </div>
                    <div className="my-reviews-group-seller">
                      <div className="my-reviews-group-header">
                        <span>Sold by
                          <div className="review-seller">
                            <a href="#" className="review-seller-name">Mangrove Online Market</a>
                          </div>
                        </span>
                      </div>
                      <button type="button" className="next-btn next-btn-secondary next-btn-medium my-reviews__rate-button">Review</button>
                    </div>
                  </div>
                </div>
                {/* item end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
