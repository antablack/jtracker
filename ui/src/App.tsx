import { Button, Divider, Row, Col, List, Typography, Space } from "antd";
import {
  PlayCircleOutlined,
  SettingOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./navbar";

const { Paragraph } = Typography;

const data = [
  "Revision de bugs",
  "Revision de bugs",
  "Revision de bugs",
  "Revision de bugs",
];

function App() {
  return (
    <>
      <Row>
        <Col span={22} offset={1}>
          <NavBar />
          <Divider orientation="left">Today</Divider>
          <List
            size="default"
            bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Paragraph
                  className="mb-0"
                  strong={true}
                  editable={{
                    tooltip: "click to edit text",
                    onChange: () => {},
                    triggerType: ["text"],
                  }}
                >
                  {item}
                </Paragraph>
                <Space>
                <Paragraph className="text-center mb-0">00:00:01</Paragraph>
                  <Button
                    type="primary"
                    icon={<PlayCircleOutlined />}
                    size={"middle"}
                  />
                  <Button
                    type="primary"
                    icon={<FieldTimeOutlined />}
                    size={"middle"}
                  />
                </Space>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}

export default App;
