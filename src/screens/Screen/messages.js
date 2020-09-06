/* Message example

name: {
  id: `app.screens.screenName.name`,
  defaultMessage: "This is the Screen!",
},

*/

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.screens.screenName.header',
    defaultMessage: 'This is the Screen!',
  },
});
