import { Button, Divider, Row, Col, List, Typography, Space } from "antd";
import {
  PlayCircleOutlined,
  SettingOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Task from "../../app/domain/Task";
import { convertMsToTime } from "../../shared/utils";
import { UpdateTask } from "../../state/slices/task";

const { Paragraph } = Typography;

const data = [
  "Revision de bugs",
  "Revision de bugs",
  "Revision de bugs",
  "Revision de bugs",
];

function TaskListSection() {
  const state = useSelector((state: RootState) => state.task.tasks);
  const dispatch = useDispatch();
  //<Divider orientation="left">Today</Divider>
  return (
    <>
      <List
        className="mt-5"
        size="default"
        bordered
        dataSource={state}
        renderItem={(item: Task) => (
          <List.Item>
            <Paragraph
              className="mb-0"
              strong={true}
              editable={{
                tooltip: "click to edit text",
                onChange: (e) => {
                  dispatch(UpdateTask(Object.assign(JSON.parse(JSON.stringify(item)), { description: e })))
                },
                triggerType: ["text"],
              }}
            >
              {item.description}
            </Paragraph>
            <Space>
              <Paragraph className="text-center mb-0">
                {convertMsToTime((item.endDateTime || 0) - item.startDateTime)}
              </Paragraph>
              <Button
                type="primary"
                icon={<PlayCircleOutlined />}
                size={"middle"}
              />
              <Button
              className="hide"
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
