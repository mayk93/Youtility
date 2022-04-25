const APP_PREFIX = 'youtility';

const fullName = (moduleName, action) => `${APP_PREFIX}/${moduleName}/${action}`;

export default fullName;