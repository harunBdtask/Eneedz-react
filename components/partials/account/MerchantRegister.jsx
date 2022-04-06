import { Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const MerchantRegister = () => {
  const route = useRouter();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [business_name, setBusinessName] = useState("");
  const [store_name, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [disable, setDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);

    if (!first_name) {
      toast.error("First name is required");
      setDisable(false);
      return;
    } else if (!last_name) {
      toast.error("Last name is required");
      setDisable(false);
      return;
    } else if (!business_name) {
      toast.error("Business name is required");
      setDisable(false);
      return;
    } else if (!store_name) {
      toast.error("Store name is required");
      setDisable(false);
      return;
    } else if (!email) {
      toast.error("Email is required");
      setDisable(false);
      return;
    } else if (!phone) {
      toast.error("Phone is required");
      setDisable(false);
      return;
    } else if (!password) {
      toast.error("Password is required");
      setDisable(false);
      return;
    }

    let formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("business_name", business_name);
    formData.append("store_name", store_name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/seller_signup`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // console.log("api", `${process.env.NEXT_PUBLIC_API_URL}/seller_signup`);
        // console.log("signup", response);

        if (response.response_status === 0) {
          toast.error(response.message);
          setDisable(false);
        }

        if (response.response_status === 200) {
          toast.success(response.message);
          route.push("/account/merchant-account/login");
        }
      });
  };

  return (
    <div className="ps-my-account">
      <div className="container">
        <Form className="ps-form--account">
          <ul className="ps-tab-list">
            <li>
              <Link href="/account/merchant-account/login">
                <a>Login</a>
              </Link>
            </li>
            <li className="active">
              <Link href="/account/merchant-account/register">
                <a>Register</a>
              </Link>
            </li>
          </ul>

          <div className="ps-tab active" id="register">
            <div className="ps-form__content pb-4">
              <h4>Merchant Registration</h4>
              <div className="form-group">
                <Form.Item
                  name="first_name"
                  rules={[
                    {
                      required: true,
                      message: "Please insert your first name!",
                    },
                  ]}
                >
                  <Input
                    className="form-control"
                    type="text"
                    placeholder="First Name"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="form-group">
                <Form.Item
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: "Please insert your last name!",
                    },
                  ]}
                >
                  <Input
                    className="form-control"
                    type="text"
                    placeholder="Last Name"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="form-group">
                <Form.Item
                  name="business_name"
                  rules={[
                    {
                      required: true,
                      message: "Please insert your business name!",
                    },
                  ]}
                >
                  <Input
                    className="form-control"
                    type="text"
                    placeholder="Business Name"
                    value={business_name}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="form-group">
                <Form.Item
                  name="store_name"
                  rules={[
                    {
                      required: true,
                      message: "Please insert your store name!",
                    },
                  ]}
                >
                  <Input
                    className="form-control"
                    type="text"
                    placeholder="Store Name"
                    value={store_name}
                    onChange={(e) => setStoreName(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="form-group">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please insert your email!",
                    },
                  ]}
                >
                  <Input
                    className="form-control"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="form-group">
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Phone number is required!",
                    },
                  ]}
                >
                  <Input
                    className="form-control"
                    type="phone number"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="form-group form-forgot">
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Password is required!",
                    },
                  ]}
                >
                  <Input
                    className="form-control"
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="form-group submit">
                <button
                  type="submit"
                  className="ps-btn ps-btn--fullwidth"
                  onClick={handleSubmit}
                  disabled={disable}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default MerchantRegister;
