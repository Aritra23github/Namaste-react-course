# Episode-5

# How many types of exports and imports is present ???
* First one is Default Exports which is written like this:
function functionName() {}
export default functionName

* Second one is named exports which is written like this:
export const functionName = () => {}
export const variableName = "";

* So there is also two types of imports

* First one is default import 
import functionName from "file_location";

* Second one is named imports
import { functionName/variableName } from "file_location";