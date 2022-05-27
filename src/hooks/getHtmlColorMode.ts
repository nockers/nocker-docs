export const getColorModeValue = () => {
  if (typeof window === "undefined") {
    return "dark"
  }

  const value = document
    .querySelector("html")
    .attributes.getNamedItem("data-theme").value

  return value === "dark" ? "dark" : "light"
}
