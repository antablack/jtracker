import { Button, Divider, Row, Col, List, Typography, Space } from "antd";
import {
  PlayCircleOutlined,
  SettingOutlined,
  FieldTimeOutlined,
  PauseCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Task from "../../app/domain/Task";
import { convertMsToTime } from "../../shared/utils";
import { GeneralStopTask, ResumeTask, StartTask, StopTask, UpdateTask } from "../../state/slices/task";
import Duration from "../duration";

const { Paragraph } = Typography;

function TaskListSection() {
  const state = useSelector((state: RootState) => state.task.tasks);
  const taskState = useSelector((state: RootState) => state.task.task);
  const dispatch = useDispatch();
  //<Divider orientation="left">Today</Divider>

  const changeState = (task: Task) => {
    if (taskState) {
      task.endDateTime = Date.now()
      task.accumulatedTime += task.endDateTime - task.startDateTime
      dispatch(UpdateTask(task));
      dispatch(GeneralStopTask());
      return;
    }
    dispatch(ResumeTask(task));
  };

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
              {item.description || "No label"}
            </Paragraph>
            <Space>
              <Duration accumulated={item.accumulatedTime} isPaused={taskState?.id !== item.id} startDateTime={taskState?.startDateTime || 0} resetOnPause={false}/>
              <Button
                type="primary"
                icon={taskState?.id === item.id ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                onClick={() => changeState(JSON.parse(JSON.stringify(item)))}
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
