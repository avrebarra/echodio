import { createNanoEvents } from "nanoevents";

interface CommonEvents {
  error: (p: ErrorEventPayload) => void;
  tick: () => void;
}

export default createNanoEvents<CommonEvents>();

// ***

interface ErrorEventPayload {
  title: string;
  message: string;
}
