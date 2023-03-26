import { Row, Col, Input, Button, Typography, Space } from "antd";
import { ClearOutlined, SettingOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { ClearTask, StopTask } from "../../state/slices/task";

const { Paragraph, Title } = Typography;

const ClearBtn: React.FC = () => {
    //const state = useSelector((state: RootState) => state.task.tasks);
    //const dispatch = useDispatch();
  
    return (
        <>
          <Row className="mt-2 justify-end mr-4">
            <Button onClick={() => {
              window.location.reload()
            }}>
              Clear <ClearOutlined />
            </Button>
          </Row>
        </>
      )
};

export default ClearBtn;
