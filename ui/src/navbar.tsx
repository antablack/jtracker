import { Row, Col, Input, Button, Typography, Space } from "antd";
import { PlayCircleOutlined, SettingOutlined } from "@ant-design/icons";
import React from "react";

const { Paragraph, Title } = Typography;

const App: React.FC = () => (
  <>
    <Row className="mt-8">
      <Col span={22} className="text-center">
        <Title level={3}>JTracker app</Title>
      </Col>
      <Col span={1}>
        <Button type="primary" icon={<SettingOutlined />} size={"middle"} />
      </Col>
    </Row>
    <Row className="mt-2">
      <Col span={16}>
        <Input placeholder="Description" />
      </Col>
      <Col
        span={6}
        className="flex-column justify-center"
        style={{ display: "flex" }}
      >
        <Paragraph className="text-center mb-0">00:00:01</Paragraph>
      </Col>
      <Col span={1}>
        <Button type="primary" icon={<PlayCircleOutlined />} size={"middle"} />
      </Col>
    </Row>
  </>
);

export default App;
