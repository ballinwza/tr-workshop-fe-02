import { CommunityEnum } from '@/sections/shared/enums/community.enum'

export interface IPlacardForm {
    id?: string
    userId: string
    title: string
    description: string
    community: CommunityEnum
}
