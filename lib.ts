export interface TwitterMessage {
  id: string
}
export interface SkebUserResponse {
  nsfw_acceptable: boolean
  creator: boolean
  acceptable: boolean
  screen_name: string
  received_works_count: number
  sent_public_works_count: number
  agreed_creator_guidelines: boolean
  genre: string
  default_amount: number | null
  banned: boolean
  skills: {
    genre: string
    default_amount: number
  }[]
}
