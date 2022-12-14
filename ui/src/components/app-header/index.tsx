import { Row, Col, Input, Button, Typography, Space } from "antd";
import { ClearOutlined, SettingOutlined } from "@ant-design/icons";
import React from "react";
import AddTask from "./add-task";
import ClearBtn from "../clear";

const { Paragraph, Title } = Typography;

const AppHeader: React.FC = () => (
  <>
    <Row className="mt-8">
      <Col span={22} className="text-center">
        <Title level={3}>JTracker app</Title>
      </Col>
      <Col span={1}>
        <Button
          className="hide"
          type="primary"
          icon={<SettingOutlined />}
          size={"middle"}
        />
      </Col>
    </Row>
    <AddTask />
    <ClearBtn/>
  </>
);

export default AppHeader;
