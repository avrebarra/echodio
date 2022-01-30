import * as React from "react";

import { Link } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import evtcommons from "../services/eventcommons";
import config from "../config";

type Props = {};

export const Home: React.FC<Props> = (props) => {
  // context, vars, and states
  const [readiness, setReadiness] = React.useState<boolean>(false);

  // helper funcs
  const fxLoadData = async () => {};

  // effects
  React.useEffect(() => {
    fxLoadData();
  }, [readiness]);

  return (
    <>
      <div>
        <br />
        <div className="font-bold text-5xl mb-2">
          <Link className="" to={`/`}>
            Welcome!
          </Link>
        </div>
        <div className="text-2xl">This is your new app. How is it?</div>
        <br />
      </div>

      <div className="mb-3" />

      <Stack direction="row" spacing={2}>
        <Button size={"lg"} colorScheme="blue">
          Go!
        </Button>
        <Button
          size={"lg"}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Awesome!
        </Button>
      </Stack>
    </>
  );
};
