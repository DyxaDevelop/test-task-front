import React from "react";
import { Button, Typography } from "antd";
import Spinner from "../../components/Spinner/Spinner";
import ApiService from "../../services/ApiService";

const apiService = new ApiService();

const { Title } = Typography;

export default class MainPage extends React.Component {
  state = {
    price: 2,
    button_color: "black",
    loading: true,
  };

  componentDidMount() {
    // const rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "");
    apiService
      .getPersonalizedData("d88cb6ede74c499ba6f99a9d944ef43d") // Uncomment Add "rand" for generating new tokens/users in system
      .then((res) => {
        this.setState({
          price: res.price,
          button_color: res.button_color,
          loading: false,
        });
      });
  }
  render() {
    const { price, button_color, loading } = this.state;

    if (loading) {
      return (
        <div className="App">
          <Spinner />
        </div>
      );
    }

    return (
      <div className="App">
        <Title>My Personalized Data</Title>
        <Button
          type="primary"
          style={{ backgroundColor: button_color, border: 0 }}
        >
          My BTN
        </Button>
        <Title level={3}>My price: {price}</Title>
      </div>
    );
  }
}
