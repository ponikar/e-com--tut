const { createSelector } = require("reselect");




// STEP 1
// selecting directory from root reducers
const selectDirectory = state => state.directory;


// STEP 2
// selecting sections from directory reducers
export const selectSections = createSelector([selectDirectory],
    directory => directory.sections);