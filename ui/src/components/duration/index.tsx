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

type DurationProps = {
     isPaused: boolean, 
     accumulated: number, 
     startDateTime: number,
     resetOnPause:  boolean,
     className?: string
}

const Duration: React.FC<DurationProps> = (props: DurationProps) => {
  let durationInterval = useRef<number>();
  const [duration, setDuration] = useState(convertMsToTime(props.accumulated));
  useEffect(() => {
    if (props?.isPaused) {
        clearInterval(durationInterval.current);
    } else {
      durationInterval.current = window.setInterval(() => {
        const duration = convertMsToTime(props.accumulated + (Date.now() - props.startDateTime));
        setDuration(duration);
      }, 1000);
    }
    if (props?.resetOnPause && props?.isPaused) {
        setDuration(convertMsToTime(props.accumulated))
    }
  }, [props]);

  return (
    <Paragraph className={`mb-0 ${props.className}`} style={{ textAlign: "right" }}>
      {duration}
    </Paragraph>
  );
};

export default Duration;
