import * as U from "karet.util"

import {load, call} from "./load"

const gaAccount = "UA-52808982-3"

window.GoogleAnalyticsObject = "ga"
window.ga = (...xs) => {(window.ga.q = window.ga.q || []).push(xs)}
window.ga.l = 1 * new Date()

const loaded =
  process.env.NODE_ENV !== "production" || window.location.pathname !== "/"
  ? U.toProperty()
  : load("https://www.google-analytics.com/analytics.js")

export const ga = call(loaded, (...args) =>
  U.seq(U.template(args),
        U.takeFirst(1),
        U.on({value: args => {
          if (process.env.NODE_ENV !== "production")
            console.log("ga:", ...args)
          else
            window.ga(...args)
        }})))

export function pageview() {
  ga("set", "page", window.location.pathname)
  ga("send", "pageview")
}

export const trackOutboundLink = url =>
  ga("send", "event", "outbound", "click", url, {transport: "beacon"})

ga("create", gaAccount, "auto")

pageview()
