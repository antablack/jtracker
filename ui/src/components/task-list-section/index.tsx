import { Button, Divider, Row, Col, List, Typography, Space } from "antd";
import {
  PlayCircleOutlined,
  SettingOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

const { Paragraph } = Typography;

const data = [
  "Revision de bugs",
  "Revision de bugs",
  "Revision de bugs",
  "Revision de bugs",
];

function TaskListSection() {
  return (
    <>
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
    </>
  );
}

export default TaskListSection;
