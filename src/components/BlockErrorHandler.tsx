import * as React from "react";

import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import evtcommons from "../services/eventcommons";
import config from "../config";

type Props = {};

export const ErrorHandler: React.FC<Props> = (props) => {
  // context, vars, and states
  const toast = useToast();
  const [readiness, setReadiness] = React.useState<boolean>(false);

  // helper funcs
  const fxLoadData = async () => {};
  const fxSetupHandlers = async () => {
    const unbind = evtcommons.on("error", (p) => {
      toast({
        title: p.title,
        position: "top",
        description: p.message,
        status: "error",
        duration: 20000,
        isClosable: true,
      });
    });
    return () => {
      unbind();
    };
  };

  // effects
  React.useEffect(() => {
    fxLoadData();
    fxSetupHandlers();
  }, [readiness]);

  return <></>;
};
