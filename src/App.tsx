import { Button, Divider, Row, Col, List, Typography, Space } from "antd";

import React from "react";
import "./App.css";
import TaskListSection from "./components/task-list-section";
import AppHeader from "./components/app-header";

function App() {
  return (
    <>
      <Row className="justify-center">
        <Col span={22} offset={0}>
          <AppHeader />
          <TaskListSection />
        </Col>
      </Row>
    </>
  );
}

export default App;
