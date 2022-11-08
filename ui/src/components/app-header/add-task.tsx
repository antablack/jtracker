import { Row, Col, Input, Button, Typography, Space } from "antd";
import {
  PlayCircleOutlined,
  SettingOutlined,
  PauseCircleOutlined,
} from "@ant-design/icons";
import type { RootState } from "../../state/store";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StartTask, StopTask } from "../../state/slices/task";
import Task from "../../app/domain/Task";
import { nanoid } from "nanoid";
import { convertMsToTime } from "../../shared/utils";
import Duration from "../duration";

const AddTask: React.FC = () => {
  const state = useSelector((state: RootState) => state.task.task);
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [taskId, setTaskId] = useState("");

  const changeState = () => {
    if (state) {
      setDuration("");
      setDescription("");
      setTaskId("")
      dispatch(StopTask());
      return;
    }
    const newTask: Task = {
      id: nanoid(),
      description,
      accumulatedTime: 0,
      startDateTime: Date.now(),
    };

    setTaskId(newTask.id)
    dispatch(StartTask(newTask));
  };

  return (
    <>
      <Row className="mt-2">
        <Col span={16}>
          <Input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Col>
        <Col
          span={5}
          className="flex-column justify-center ml-3"
          style={{ display: "flex" }}
        >
        <Duration accumulated={0} isPaused={state?.id !== taskId} startDateTime={state?.startDateTime || 0} resetOnPause={true}/>
        </Col>
        <Col span={1}>
          <Button
            type="primary"
            icon={state?.id === taskId ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            size={"middle"}
            onClick={changeState}
          />
        </Col>
      </Row>
    </>
  );
};

export default AddTask;
