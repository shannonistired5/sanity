import React from 'react'

const missingContext = () => {
  throw new Error('Pane is missing router context')
}

export const PaneContext = React.createContext({
  // Zero-based index (position) of pane, visually
  index: 0,

  // Zero-based index of pane group (within URL structure)
  groupIndex: 0,

  // Zero-based index of pane within sibling group
  siblingIndex: 0,

  // Curried StateLink that passes the correct state automatically
  ChildLink: ({childId, childParameters, ...props}) => missingContext(),

  // Get the current pane ID and parameters
  getCurrentPane: missingContext,

  // Replaces the current pane with a new one
  replaceCurrentPane: (itemId, params) => missingContext(),

  // Replace or create a child pane with the given id and parameters
  replaceChildPane: (itemId, params) => missingContext(),

  // Duplicate the current pane, with optional overrides for item ID and parameters
  duplicateCurrentPane: (itemId, params) => missingContext(),

  // Set the current "view" for the pane
  setPaneView: viewId => missingContext(),

  // Returns the payload for the current pane
  getPanePayload: () => missingContext(),

  // Proxied navigation to a given intent. Consider just exposing `router` instead?
  navigateIntent: (intentName, params, options = {}) => missingContext()
})