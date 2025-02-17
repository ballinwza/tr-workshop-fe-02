import { CommunityEnum } from '@/sections/shared/enums/community.enum'

export interface PlacardEntity {
    id: string
    userId: string
    title: string
    description: string
    commentId: string[]
    community: CommunityEnum
}
