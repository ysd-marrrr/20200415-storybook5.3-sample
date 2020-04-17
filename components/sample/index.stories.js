import '../../src/scss/sample.scss';
import { storiesOf } from '@storybook/html';
import defaultTemplate from './default.html';
import dialogSample from './dialog.html';

storiesOf('Common/Sample', module)
.add('default', () => defaultTemplate);

storiesOf('Common/Sample', module)
.add('dialog', () => dialogSample);