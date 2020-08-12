import ask from "workshop.mjs";

ask("It's a default import, right?");

import * as workshop from "workshop.mjs";

workshop.ask("It's a namespace import, right?");
// universal modula 