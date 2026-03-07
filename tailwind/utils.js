/**
 * Hederae DS — Tailwind Config Utilities
 */

/**
 * Deep merge two Tailwind config objects.
 * Arrays are concatenated; objects are recursively merged.
 */
function merge(base, overrides) {
  const result = { ...base }

  for (const [key, value] of Object.entries(overrides)) {
    if (
      value !== null &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      typeof result[key] === 'object' &&
      !Array.isArray(result[key])
    ) {
      result[key] = merge(result[key], value)
    } else if (Array.isArray(value) && Array.isArray(result[key])) {
      result[key] = [...result[key], ...value]
    } else {
      result[key] = value
    }
  }

  return result
}

module.exports = { merge }
