import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

// When changing the theme add the flag "--no-manager-cache" to
// the story book script when re-running.

// NOTE: Remember to remove the flag once done creating the theme
// as it severely impacts loading times.
addons.setConfig({
  theme: themes.dark,
});
