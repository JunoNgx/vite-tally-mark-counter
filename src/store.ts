import { writable } from "svelte/store"

export const savedCount = writable(0)
export const previewCount = writable(0)