import React from "react";
import { Table } from "antd";
import ApiService from "../../services/ApiService";

const apiService = new ApiService();

const columns = [
  {
    title: "Device Token",
    dataIndex: "device_token",
    width: "50%",
  },
  {
    title: "Button Color",
    dataIndex: "button_color",
    width: "100%",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
];

export default class StatsPage extends React.Component {
  state = {
    data: [],
    loading: false,
  };

  componentDidMount() {
    apiService.getAllData().then((res) => {
      console.log(res);
      this.setState({
        loading: false,
        data: res,
      });
    });
  }

  render() {
    const { data, loading } = this.state;
    return (
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data}
        loading={loading}
        onChange={this.handleTableChange}
      />
    );
  }
}
