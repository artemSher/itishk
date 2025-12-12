"use client"

import { useEffect, useState } from "react"

interface LogEntry {
  id: number
  message: string
  timestamp: string
  type: "info" | "error" | "warning"
}

let logCounter = 0
const logs: LogEntry[] = []
const listeners = new Set<(logs: LogEntry[]) => void>()

export const log = (message: string, type: "info" | "error" | "warning" = "info") => {
  const entry: LogEntry = {
    id: logCounter++,
    message,
    timestamp: new Date().toLocaleTimeString(),
    type,
  }
  logs.push(entry)
  if (logs.length > 20) logs.shift()
  listeners.forEach((listener) => listener([...logs]))
}

export function DebugLogger() {
  const [logEntries, setLogEntries] = useState<LogEntry[]>([])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    listeners.add(setLogEntries)
    return () => {
      listeners.delete(setLogEntries)
    }
  }, [])

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          padding: "8px 12px",
          background: "#000",
          color: "#0f0",
          border: "1px solid #0f0",
          borderRadius: "4px",
          fontSize: "12px",
          zIndex: 99999,
          fontFamily: "monospace",
        }}
      >
        Show Debug ({logEntries.length})
      </button>
    )
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        maxHeight: "300px",
        overflowY: "auto",
        background: "rgba(0, 0, 0, 0.95)",
        color: "#0f0",
        padding: "10px",
        fontSize: "11px",
        fontFamily: "monospace",
        zIndex: 99999,
        borderTop: "2px solid #0f0",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <strong>Debug Log (iPhone)</strong>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: "transparent",
            border: "1px solid #0f0",
            color: "#0f0",
            padding: "2px 8px",
            cursor: "pointer",
          }}
        >
          Hide
        </button>
      </div>
      {logEntries.map((entry) => (
        <div
          key={entry.id}
          style={{
            marginBottom: "4px",
            color: entry.type === "error" ? "#f00" : entry.type === "warning" ? "#ff0" : "#0f0",
          }}
        >
          <span style={{ opacity: 0.6 }}>[{entry.timestamp}]</span> {entry.message}
        </div>
      ))}
    </div>
  )
}
