import * as React from "react";

import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import evtcommons from "../services/eventcommons";
import config from "../config";

type Props = {};

export const Sample: React.FC<Props> = (props) => {
  // context, vars, and states
  const [readiness, setReadiness] = React.useState<boolean>(false);

  // helper funcs
  const fxLoadData = async () => {};

  // effects
  React.useEffect(() => {
    fxLoadData();
  }, [readiness]);

  return <></>;
};
