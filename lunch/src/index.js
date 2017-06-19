import app from 'js/app';
import {icons} from 'js/floatingIcons';
import {badgeIndication} from 'js/badgeIndication';

// Start app
new app().run();

// Set background spinning/floating icons
icons();

// Start badge indication animations
badgeIndication();