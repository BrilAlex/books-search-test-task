export type VolumeType = {
  kind: string
  id: string
  volumeInfo: {
    title: string
    authors: string[]
    description: string
    mainCategory: string
    categories: string[]
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
      small: string
      medium: string
      large: string
    }
  }
};
