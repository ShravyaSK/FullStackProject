import React, { useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import { Tabs } from "antd";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import TheatresList from "./TheatresList";

function Admin() {
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAdmin) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <PageTitle title="Admin" />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Movies" key="1">
          <MoviesList />
        </Tabs.TabPane>

        <Tabs.TabPane tab="Theatres" key="2">
          <TheatresList />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Upcoming Movies" key="3">
          <p>Upcoming</p>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;
