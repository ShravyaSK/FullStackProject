import React from "react";
import { Tabs } from "antd";
import PageTitle from "../../components/PageTitle";
import TheatresList from "./TheatresList";
import Booking from "./Booking";

function Profile() {
  return (
    <div>
      <PageTitle title="Profile" />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Bookings" key="1">
          <Booking />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Apply for Theater" key="2">
          <TheatresList />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;
