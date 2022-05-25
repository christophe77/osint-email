import Google from './google';
import HaveIBeenPowned from './haveIBeenPowned';
import Pastebin from './pastebin';
type Result = {
	google: Google[];
	haveIBeenPowned: HaveIBeenPowned[];
	pastebin : Pastebin[];
};
export default Result;
