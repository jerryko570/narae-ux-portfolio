export type CuriProductAction = {
  label: string
  href: string
}

export type CuriProductClosing = {
  actions: {
    primary: CuriProductAction
    secondary: CuriProductAction
  }
}
