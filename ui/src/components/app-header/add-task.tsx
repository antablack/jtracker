import { Row, Col, Input, Button, Typography, Space } from "antd";
import { PlayCircleOutlined, SettingOutlined } from "@ant-design/icons";
import React from "react";

const { Paragraph, Title } = Typography;

const AddTask: React.FC = () => (
  <>
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

export default AddTask;
