import { Root as HTMLRoot } from "hast"
import { QuartzTransformerPlugin } from "../types"

export interface Options {
  descriptionLength: number
  replaceExternalLinks: boolean
}

const defaultOptions: Options = {
  descriptionLength: 0,
  replaceExternalLinks: true,
}

export const Description: QuartzTransformerPlugin<Partial<Options> | undefined> = () => {
  return {
    name: "Description",
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            file.data.description = "Stochastic parroting my way to being the coolest person I've ever met."
            file.data.text = ""
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    description: string
    text: string
  }
}
