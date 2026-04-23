export type ProductAction = {
  label: string
  href: string
}

export type ProductClosing = {
  actions: {
    primary: ProductAction
    secondary: ProductAction
  }
}
