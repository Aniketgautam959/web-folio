"use client"

import * as React from "react"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const toastTimeouts = new Map()

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

const hotToastState = {
  toasts: [],
  listeners: [],
}

function dispatch(action) {
  hotToastState.toasts = reducer(hotToastState.toasts, action)
  hotToastState.listeners.forEach((listener) => listener(hotToastState.toasts))
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TOAST":
      return [action.toast, ...state].slice(0, TOAST_LIMIT)

    case "UPDATE_TOAST":
      return state.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t))

    case "DISMISS_TOAST": {
      const { toastId } = action
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }
      return state.map((t) =>
        t.id === toastId || toastId === undefined
          ? {
              ...t,
              open: false,
            }
          : t,
      )
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return []
      }
      return state.filter((t) => t.id !== action.toastId)
    default:
      return state
  }
}

function useToast() {
  const [state, setState] = React.useState(hotToastState.toasts)

  React.useEffect(() => {
    hotToastState.listeners.push(setState)
    return () => {
      hotToastState.listeners = hotToastState.listeners.filter((listener) => listener !== setState)
    }
  }, [state])

  const toast = React.useCallback((props) => {
    const id = genId()
    const update = (props) =>
      dispatch({
        type: "UPDATE_TOAST",
        toast: { ...props, id },
      })
    const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })
    dispatch({
      type: "ADD_TOAST",
      toast: {
        ...props,
        id,
        open: true,
        onOpenChange: (open) => {
          if (!open) dismiss()
        },
      },
    })
    return {
      id: id,
      update,
      dismiss,
    }
  }, [])

  return {
    ...state,
    toast,
    toasts: state,
  }
}

export { useToast }
