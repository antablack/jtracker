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

const { Paragraph, Title } = Typography;

const AddTask: React.FC = () => {
  const state = useSelector((state: RootState) => state.task.task);
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  let durationInterval = useRef<number>();

  useEffect(() => {
    if (state && !state?.endDateTime) {
      durationInterval.current = window.setInterval(() => {
        const duration = convertMsToTime(Date.now() - state.startDateTime);
        setDuration(duration);
      }, 1000);
    } else {
      clearInterval(durationInterval.current);
    }
  }, [state]);

  const changeState = () => {
    if (state) {
      setDuration("");
      setDescription("");
      dispatch(StopTask());
      return;
    }
    const newTask: Task = {
      id: nanoid(),
      description,
      startDateTime: Date.now(),
    };

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
          <Paragraph className="mb-0 mr-2" style={{textAlign: "right"}}>
            {duration || "00:00:00"}
          </Paragraph>
        </Col>
        <Col span={1}>
          <Button
            type="primary"
            icon={state ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            size={"middle"}
            onClick={changeState}
          />
        </Col>
      </Row>
    </>
  );
};

export default AddTask;
